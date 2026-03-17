// src/app/components/admin/event-form/event-form.component.ts - WITH CLOUDINARY
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../core/services/events.service';
import { CloudinaryService } from '../../../core/services/cloudinary.service';
import { Event } from '../../../core/models/event.model';

interface ImagePreview {
  file?: File;
  url: string;
  existing?: boolean;
}

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  isEditMode = false;
  eventId: string | null = null;

  // Form Data
  title = '';
  description = '';
  date = '';
  location = '';
  published = false;

  // Images
  imagePreviews: ImagePreview[] = [];
  maxImages = 10;

  // Video
  videoFile: File | null = null;
  videoUrl = '';
  videoPreview: string | null = null;
  existingVideoUrl: string | null = null;

  // UI State
  loading = false;
  saving = false;
  uploadProgress = 0;
  currentUploadStep = '';
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService,
    private cloudinaryService: CloudinaryService
  ) {}

  async ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.isEditMode = true;
      await this.loadEvent();
    } else {
      const today = new Date();
      this.date = today.toISOString().split('T')[0];
    }
  }

  async loadEvent() {
    if (!this.eventId) return;

    try {
      this.loading = true;
      this.error = null;
      
      const event = await this.eventsService.getEventById(this.eventId);
      
      if (event) {
        this.title = event.title;
        this.description = event.description;
        this.location = event.location;
        this.published = event.published;
        
        if (event.date) {
          const dateObj = typeof event.date === 'string' 
            ? new Date(event.date)
            : new Date((event.date as any).seconds * 1000);
          this.date = dateObj.toISOString().split('T')[0];
        }

        if (event.images && event.images.length > 0) {
          this.imagePreviews = event.images.map(url => ({
            url,
            existing: true
          }));
        }

        if (event.videoUrl) {
          this.existingVideoUrl = event.videoUrl;
          this.videoUrl = event.videoUrl;
        }
      } else {
        this.error = 'الفعالية غير موجودة';
      }
    } catch (error) {
      console.error('Error loading event:', error);
      this.error = 'حدث خطأ أثناء تحميل الفعالية';
    } finally {
      this.loading = false;
    }
  }

  onImageSelect(event: any) {
    const files = Array.from(event.target.files) as File[];
    
    files.forEach(file => {
      if (this.imagePreviews.length >= this.maxImages) {
        alert(`الحد الأقصى ${this.maxImages} صور`);
        return;
      }

      if (!file.type.startsWith('image/')) {
        alert('الرجاء اختيار ملف صورة');
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        alert('حجم الصورة يجب أن يكون أقل من 10 ميجابايت');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push({
          file,
          url: e.target.result,
          existing: false
        });
      };
      reader.readAsDataURL(file);
    });

    event.target.value = '';
  }

  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
  }

  onVideoSelect(event: any) {
    const file = event.target.files[0];
    
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      alert('الرجاء اختيار ملف فيديو');
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      alert('حجم الفيديو يجب أن يكون أقل من 100 ميجابايت');
      return;
    }

    this.videoFile = file;
    
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.videoPreview = e.target.result;
    };
    reader.readAsDataURL(file);

    event.target.value = '';
  }

  removeVideo() {
    this.videoFile = null;
    this.videoPreview = null;
    this.videoUrl = '';
    this.existingVideoUrl = null;
  }

  validateForm(): boolean {
    if (!this.title.trim()) {
      this.error = 'الرجاء إدخال عنوان الفعالية';
      return false;
    }

    if (!this.description.trim()) {
      this.error = 'الرجاء إدخال وصف الفعالية';
      return false;
    }

    if (!this.date) {
      this.error = 'الرجاء اختيار تاريخ الفعالية';
      return false;
    }

    if (!this.location.trim()) {
      this.error = 'الرجاء إدخال مكان الفعالية';
      return false;
    }

    if (this.imagePreviews.length === 0) {
      this.error = 'الرجاء إضافة صورة واحدة على الأقل';
      return false;
    }

    return true;
  }

  async onSubmit() {
    if (!this.validateForm()) {
      return;
    }

    try {
      this.saving = true;
      this.error = null;
      this.uploadProgress = 0;

      let eventId = this.eventId;

      // الخطوة 1: إنشاء Event إذا كان جديد
      this.currentUploadStep = 'جاري حفظ البيانات الأساسية...';
      this.uploadProgress = 5;

      if (!eventId) {
        eventId = await this.eventsService.createEvent({
          title: this.title.trim(),
          description: this.description.trim(),
          date: new Date(this.date),
          location: this.location.trim(),
          images: [],
          videoUrl: '',
          published: this.published,
          createdAt: new Date(),
          updatedAt: new Date()
        });
        console.log('✅ Event created with ID:', eventId);
      }

      // الخطوة 2: رفع الصور على Cloudinary
      const imageUrls: string[] = [];
      
      // أولاً: الصور الموجودة
      for (const preview of this.imagePreviews) {
        if (preview.existing && preview.url) {
          imageUrls.push(preview.url);
        }
      }

      // ثانياً: رفع الصور الجديدة على Cloudinary
      const newImages = this.imagePreviews.filter(p => !p.existing && p.file);
      const totalImages = newImages.length;

      for (let i = 0; i < totalImages; i++) {
        const preview = newImages[i];
        if (preview.file) {
          this.currentUploadStep = `جاري رفع الصورة ${i + 1} من ${totalImages} على Cloudinary...`;
          
          try {
            const url = await this.cloudinaryService.uploadImage(
              preview.file,
              (progress) => {
                const baseProgress = 5 + (i * 60 / totalImages);
                this.uploadProgress = Math.round(baseProgress + (progress * 0.6 / totalImages));
              }
            );
            console.log(`✅ Image ${i + 1} uploaded:`, url);
            imageUrls.push(url);
          } catch (error) {
            console.error(`❌ Failed to upload image ${i + 1}:`, error);
            throw new Error(`فشل رفع الصورة ${i + 1}`);
          }
        }
      }

      console.log('✅ All images uploaded. Total:', imageUrls.length);
      this.uploadProgress = 65;

      // الخطوة 3: رفع الفيديو
      let finalVideoUrl = '';
      
      if (this.videoFile) {
        this.currentUploadStep = 'جاري رفع الفيديو على Cloudinary...';
        console.log('Uploading video...');
        
        try {
          finalVideoUrl = await this.cloudinaryService.uploadVideo(
            this.videoFile,
            (progress) => {
              this.uploadProgress = Math.round(65 + (progress * 0.25));
            }
          );
          console.log('✅ Video uploaded:', finalVideoUrl);
        } catch (error) {
          console.error('❌ Video upload failed:', error);
          console.warn('Continuing without video...');
        }
      } else if (this.videoUrl && (this.videoUrl.includes('youtube') || this.videoUrl.includes('youtu.be'))) {
        finalVideoUrl = this.videoUrl;
      } else if (this.existingVideoUrl) {
        finalVideoUrl = this.existingVideoUrl;
      }

      this.uploadProgress = 90;

      // الخطوة 4: حفظ البيانات النهائية في Firestore
      this.currentUploadStep = 'جاري حفظ البيانات في قاعدة البيانات...';
      
      await this.eventsService.updateEvent(eventId, {
        title: this.title.trim(),
        description: this.description.trim(),
        date: new Date(this.date),
        location: this.location.trim(),
        images: imageUrls,
        videoUrl: finalVideoUrl,
        published: this.published,
        updatedAt: new Date()
      });

      this.uploadProgress = 100;
      this.currentUploadStep = '✅ تم الحفظ بنجاح!';
      console.log('✅ Event saved successfully!');

      // انتظار ثانية ثم التوجيه
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.router.navigate(['/admin/dashboard']);
    } catch (error) {
      console.error('❌ Error saving event:', error);
      this.error = 'حدث خطأ: ' + (error as any).message;
      this.saving = false;
      this.uploadProgress = 0;
      this.currentUploadStep = '';
    }
  }

  cancel() {
    if (confirm('هل أنت متأكد من الإلغاء؟ سيتم فقد جميع التغييرات')) {
      this.router.navigate(['/admin/dashboard']);
    }
  }
}
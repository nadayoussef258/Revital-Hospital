// src/app/components/events/event-detail/event-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EventsService } from '../core/services/events.service';
import { Event } from '../core/models/event.model';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event | null = null;
  loading = true;
  error: string | null = null;
  selectedImageIndex = 0;
  showImageModal = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService,
    private sanitizer: DomSanitizer
  ) {}

  async ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      await this.loadEvent(eventId);
    } else {
      this.router.navigate(['/events']);
    }
  }

  async loadEvent(id: string) {
    try {
      this.loading = true;
      this.error = null;
      this.event = await this.eventsService.getEventById(id);
      
      if (!this.event) {
        this.error = 'الفعالية غير موجودة';
      }
    } catch (error) {
      console.error('Error loading event:', error);
      this.error = 'حدث خطأ أثناء تحميل تفاصيل الفعالية';
    } finally {
      this.loading = false;
    }
  }

  formatDate(date: any): string {
    if (!date) return '';
    
    if (date.seconds) {
      date = new Date(date.seconds * 1000);
    } else if (typeof date === 'string') {
      date = new Date(date);
    }

    return new Intl.DateTimeFormat('ar-EG', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getSafeVideoUrl(): SafeResourceUrl | null {
    if (!this.event?.videoUrl) return null;
    
    // Convert YouTube URL to embed URL
    let videoUrl = this.event.videoUrl;
    
    if (videoUrl.includes('youtube.com/watch?v=')) {
      const videoId = videoUrl.split('v=')[1]?.split('&')[0];
      videoUrl = `https://www.youtube.com/embed/${videoId}`;
    } else if (videoUrl.includes('youtu.be/')) {
      const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
      videoUrl = `https://www.youtube.com/embed/${videoId}`;
    }
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  openImageModal(index: number) {
    this.selectedImageIndex = index;
    this.showImageModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeImageModal() {
    this.showImageModal = false;
    document.body.style.overflow = 'auto';
  }

  previousImage() {
    if (this.event?.images) {
      this.selectedImageIndex = this.selectedImageIndex === 0 
        ? this.event.images.length - 1 
        : this.selectedImageIndex - 1;
    }
  }

  nextImage() {
    if (this.event?.images) {
      this.selectedImageIndex = (this.selectedImageIndex + 1) % this.event.images.length;
    }
  }

  goBack() {
    this.router.navigate(['/events']);
  }

  shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  }

  shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.event?.title || '');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  }

  shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(this.event?.title || '');
    window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
  }
}
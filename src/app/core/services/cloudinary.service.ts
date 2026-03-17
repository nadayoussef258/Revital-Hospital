// src/app/services/cloudinary.service.ts
import { Injectable } from '@angular/core';
import { cloudinaryConfig, getCloudinaryUploadUrl } from '../../../../cloudinary.config';

export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  format: string;
  width?: number;
  height?: number;
  bytes: number;
  duration?: number; // للفيديو
}

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  constructor() {}

  /**
   * رفع صورة على Cloudinary
   */
  async uploadImage(
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    try {
      console.log('Uploading image to Cloudinary:', file.name);
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', cloudinaryConfig.uploadPreset);
      formData.append('folder', 'revital-events/images');
      
      const response = await this.uploadWithProgress(
        getCloudinaryUploadUrl('image'),
        formData,
        onProgress
      );
      
      console.log('Image uploaded successfully:', response.secure_url);
      return response.secure_url;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      throw new Error('فشل رفع الصورة: ' + (error as any).message);
    }
  }

  /**
   * رفع فيديو على Cloudinary
   */
  async uploadVideo(
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    try {
      console.log('Uploading video to Cloudinary:', file.name);
      
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', cloudinaryConfig.uploadPreset);
      formData.append('folder', 'revital-events/videos');
      
      const response = await this.uploadWithProgress(
        getCloudinaryUploadUrl('video'),
        formData,
        onProgress
      );
      
      console.log('Video uploaded successfully:', response.secure_url);
      return response.secure_url;
    } catch (error) {
      console.error('Error uploading video to Cloudinary:', error);
      throw new Error('فشل رفع الفيديو: ' + (error as any).message);
    }
  }

  /**
   * رفع ملف مع تتبع التقدم
   */
  private uploadWithProgress(
    url: string,
    formData: FormData,
    onProgress?: (progress: number) => void
  ): Promise<CloudinaryUploadResponse> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // تتبع التقدم
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable && onProgress) {
          const progress = Math.round((e.loaded / e.total) * 100);
          onProgress(progress);
          console.log(`Upload progress: ${progress}%`);
        }
      });

      // عند النجاح
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          } catch (error) {
            reject(new Error('فشل تحليل استجابة Cloudinary'));
          }
        } else {
          let errorMessage = `خطأ ${xhr.status}`;
          try {
            const errorResponse = JSON.parse(xhr.responseText);
            errorMessage = errorResponse.error?.message || errorMessage;
          } catch (e) {
            errorMessage = xhr.statusText || errorMessage;
          }
          reject(new Error(errorMessage));
        }
      });

      // عند الخطأ
      xhr.addEventListener('error', () => {
        reject(new Error('فشل الاتصال بـ Cloudinary - تحققي من الإنترنت'));
      });

      // عند الإلغاء
      xhr.addEventListener('abort', () => {
        reject(new Error('تم إلغاء الرفع'));
      });

      // إرسال الطلب
      xhr.open('POST', url);
      xhr.send(formData);
    });
  }

  /**
   * الحصول على رابط محسّن للصورة
   */
  getOptimizedImageUrl(
    url: string,
    width?: number,
    height?: number
  ): string {
    if (!url.includes('cloudinary.com')) {
      return url;
    }

    const parts = url.split('/upload/');
    if (parts.length !== 2) return url;

    const transformations = [];
    if (width) transformations.push(`w_${width}`);
    if (height) transformations.push(`h_${height}`);
    transformations.push('c_fill', 'q_auto', 'f_auto');

    return `${parts[0]}/upload/${transformations.join(',')}/${parts[1]}`;
  }
}
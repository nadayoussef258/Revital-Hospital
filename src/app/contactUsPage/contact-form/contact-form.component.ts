// src/app/components/contact-form/contact-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  formStatus = '';
  statusType: 'success' | 'error' = 'success';
  isSubmitting = false;

  constructor(private contactService: ContactService) {}

  async onSubmit() {
    // Validation
    if (!this.formData.name || !this.formData.email || !this.formData.phone || 
        !this.formData.subject || !this.formData.message) {
      this.formStatus = 'الرجاء ملء جميع الحقول';
      this.statusType = 'error';
      setTimeout(() => this.formStatus = '', 3000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.email)) {
      this.formStatus = 'الرجاء إدخال بريد إلكتروني صحيح';
      this.statusType = 'error';
      setTimeout(() => this.formStatus = '', 3000);
      return;
    }

    try {
      this.isSubmitting = true;
      this.formStatus = 'جاري الإرسال...';
      this.statusType = 'success';

      // إرسال الرسالة لـ Firebase
      await this.contactService.submitMessage({
        name: this.formData.name,
        email: this.formData.email,
        phone: this.formData.phone,
        subject: this.formData.subject,
        message: this.formData.message
      });

      this.formStatus = '✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
      this.statusType = 'success';
      
      // إعادة تعيين النموذج بعد 3 ثواني
      setTimeout(() => {
        this.formStatus = '';
        this.resetForm();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      this.formStatus = '❌ حدث خطأ أثناء إرسال الرسالة. الرجاء المحاولة مرة أخرى.';
      this.statusType = 'error';
      setTimeout(() => this.formStatus = '', 3000);
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
// contact-form.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.phone && 
        this.formData.subject && this.formData.message) {
      this.formStatus = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
      this.statusType = 'success';
      
      setTimeout(() => {
        this.formStatus = '';
        this.resetForm();
      }, 3000);
    } else {
      this.formStatus = 'الرجاء ملء جميع الحقول';
      this.statusType = 'error';
      setTimeout(() => this.formStatus = '', 2000);
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



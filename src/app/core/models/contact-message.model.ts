// src/app/core/models/contact-message.model.ts

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date | any;
  repliedAt?: Date | any;
  notes?: string;
}
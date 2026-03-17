// src/app/components/admin/messages/messages.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactService } from '../../../core/services/contact.service';
import { ContactMessage } from '../../../core/models/contact-message.model';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: ContactMessage[] = [];
  filteredMessages: ContactMessage[] = [];
  loading = true;
  error: string | null = null;
  
  // Filters
  selectedFilter: 'all' | 'new' | 'read' | 'replied' = 'all';
  searchQuery = '';

  // Stats
  stats = {
    total: 0,
    new: 0,
    read: 0,
    replied: 0
  };

  constructor(private contactService: ContactService) {}

  async ngOnInit() {
    await this.loadMessages();
  }

  async loadMessages() {
    try {
      this.loading = true;
      this.error = null;
      
      this.messages = await this.contactService.getAllMessages();
      this.filteredMessages = [...this.messages];
      
      // حساب الإحصائيات
      this.calculateStats();
    } catch (error) {
      console.error('Error loading messages:', error);
      this.error = 'حدث خطأ أثناء تحميل الرسائل';
    } finally {
      this.loading = false;
    }
  }

  calculateStats() {
    this.stats = {
      total: this.messages.length,
      new: this.messages.filter(m => m.status === 'new').length,
      read: this.messages.filter(m => m.status === 'read').length,
      replied: this.messages.filter(m => m.status === 'replied').length
    };
  }

  filterMessages(filter: 'all' | 'new' | 'read' | 'replied') {
    this.selectedFilter = filter;
    this.applyFilters();
  }

  searchMessages(query: string) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.messages];

    // Filter by status
    if (this.selectedFilter !== 'all') {
      filtered = filtered.filter(m => m.status === this.selectedFilter);
    }

    // Filter by search query
    if (this.searchQuery) {
      filtered = filtered.filter(m => 
        m.name.toLowerCase().includes(this.searchQuery) ||
        m.email.toLowerCase().includes(this.searchQuery) ||
        m.subject.toLowerCase().includes(this.searchQuery) ||
        m.message.toLowerCase().includes(this.searchQuery)
      );
    }

    this.filteredMessages = filtered;
  }

  async markAsRead(message: ContactMessage) {
    if (!message.id || message.status === 'read') return;
    
    try {
      await this.contactService.updateMessageStatus(message.id, 'read');
      message.status = 'read';
      this.calculateStats();
    } catch (error) {
      console.error('Error marking as read:', error);
      alert('حدث خطأ أثناء تحديث الحالة');
    }
  }

  async markAsReplied(message: ContactMessage) {
    if (!message.id) return;
    
    const notes = prompt('ملاحظات (اختياري):');
    
    try {
      await this.contactService.updateMessageStatus(message.id, 'replied', notes || undefined);
      message.status = 'replied';
      if (notes) message.notes = notes;
      this.calculateStats();
      alert('تم تحديث الحالة بنجاح');
    } catch (error) {
      console.error('Error marking as replied:', error);
      alert('حدث خطأ أثناء تحديث الحالة');
    }
  }

  async deleteMessage(message: ContactMessage) {
    if (!message.id) return;
    
    if (confirm(`هل أنت متأكد من حذف رسالة ${message.name}؟`)) {
      try {
        await this.contactService.deleteMessage(message.id);
        this.messages = this.messages.filter(m => m.id !== message.id);
        this.applyFilters();
        this.calculateStats();
        alert('تم حذف الرسالة بنجاح');
      } catch (error) {
        console.error('Error deleting message:', error);
        alert('حدث خطأ أثناء حذف الرسالة');
      }
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
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'new': return 'badge-new';
      case 'read': return 'badge-read';
      case 'replied': return 'badge-replied';
      default: return '';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'new': return 'جديدة';
      case 'read': return 'مقروءة';
      case 'replied': return 'تم الرد';
      default: return status;
    }
  }

 

  callPhone(phone: string) {
    window.location.href = `tel:${phone}`;
  }
}
// src/app/components/admin/dashboard/dashboard.component.ts - NEW VERSION
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { EventsService } from '../../core/services/events.service';
import { ContactService } from '../../core/services/contact.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // Events Stats
  eventsCount = {
    total: 0,
    published: 0,
    draft: 0
  };

  // Messages Stats
  messagesCount = {
    total: 0,
    new: 0,
    read: 0,
    replied: 0
  };

  loading = true;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private eventsService: EventsService,
    private contactService: ContactService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.loadStats();
  }

  async loadStats() {
    try {
      this.loading = true;
      this.error = null;

      // تحميل إحصائيات الفعاليات
      const events = await this.eventsService.getAllEvents();
      this.eventsCount = {
        total: events.length,
        published: events.filter(e => e.published).length,
        draft: events.filter(e => !e.published).length
      };

      // تحميل إحصائيات الرسائل
      this.messagesCount = await this.contactService.getMessagesStats();

    } catch (error) {
      console.error('Error loading stats:', error);
      this.error = 'حدث خطأ أثناء تحميل الإحصائيات';
    } finally {
      this.loading = false;
    }
  }
}
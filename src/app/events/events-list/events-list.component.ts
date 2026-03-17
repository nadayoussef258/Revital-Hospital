// src/app/components/events/events-list/events-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EventsService } from '../../core/services/events.service';
import { Event } from '../../core/models/event.model';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: Event[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.loadEvents();
  }

  async loadEvents() {
    try {
      this.loading = true;
      this.error = null;
      this.events = await this.eventsService.getPublishedEvents();
    } catch (error) {
      console.error('Error loading events:', error);
      this.error = 'حدث خطأ أثناء تحميل الفعاليات';
    } finally {
      this.loading = false;
    }
  }

  viewEventDetails(eventId: string | undefined) {
    if (eventId) {
      this.router.navigate(['/events', eventId]);
    }
  }

  formatDate(date: any): string {
    if (!date) return '';
    
    // Handle Firebase Timestamp
    if (date.seconds) {
      date = new Date(date.seconds * 1000);
    } else if (typeof date === 'string') {
      date = new Date(date);
    }

    return new Intl.DateTimeFormat('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getShortDescription(description: string, maxLength: number = 150): string {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  }

  getEventImage(event: Event): string {
    return event.images && event.images.length > 0 
      ? event.images[0] 
      : 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80';
  }
}
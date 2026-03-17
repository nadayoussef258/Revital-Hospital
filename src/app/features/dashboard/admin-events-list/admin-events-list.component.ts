// src/app/components/admin/admin-events-list/admin-events-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../core/services/events.service';
import { Event } from '../../../core/models/event.model';

@Component({
  selector: 'app-admin-events-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-events-list.component.html',
  styleUrls: ['./admin-events-list.component.css']
})
export class AdminEventsListComponent implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  loading = true;
  error: string | null = null;
  
  // Filters
  selectedFilter: 'all' | 'published' | 'draft' = 'all';
  searchQuery = '';

  // Stats
  stats = {
    total: 0,
    published: 0,
    draft: 0
  };

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    // Check for filter from query params
    this.route.queryParams.subscribe(params => {
      if (params['filter']) {
        this.selectedFilter = params['filter'];
      }
    });

    await this.loadEvents();
  }

  async loadEvents() {
    try {
      this.loading = true;
      this.error = null;
      
      this.events = await this.eventsService.getAllEvents();
      this.filteredEvents = [...this.events];
      
      // حساب الإحصائيات
      this.calculateStats();
      
      // تطبيق الفلتر
      this.applyFilters();
    } catch (error) {
      console.error('Error loading events:', error);
      this.error = 'حدث خطأ أثناء تحميل الفعاليات';
    } finally {
      this.loading = false;
    }
  }

  calculateStats() {
    this.stats = {
      total: this.events.length,
      published: this.events.filter(e => e.published).length,
      draft: this.events.filter(e => !e.published).length
    };
  }

  filterEvents(filter: 'all' | 'published' | 'draft') {
    this.selectedFilter = filter;
    this.applyFilters();
  }

  searchEvents(query: string) {
    this.searchQuery = query.toLowerCase();
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.events];

    // Filter by status
    if (this.selectedFilter === 'published') {
      filtered = filtered.filter(e => e.published);
    } else if (this.selectedFilter === 'draft') {
      filtered = filtered.filter(e => !e.published);
    }

    // Filter by search query
    if (this.searchQuery) {
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(this.searchQuery) ||
        e.description.toLowerCase().includes(this.searchQuery) ||
        e.location.toLowerCase().includes(this.searchQuery)
      );
    }

    this.filteredEvents = filtered;
  }

  async deleteEvent(event: Event) {
    if (!event.id) return;
    
    if (confirm(`هل أنت متأكد من حذف الفعالية "${event.title}"؟`)) {
      try {
        await this.eventsService.deleteEvent(event.id);
        this.events = this.events.filter(e => e.id !== event.id);
        this.applyFilters();
        this.calculateStats();
        alert('تم حذف الفعالية بنجاح');
      } catch (error) {
        console.error('Error deleting event:', error);
        alert('حدث خطأ أثناء حذف الفعالية');
      }
    }
  }

  async togglePublish(event: Event) {
    if (!event.id) return;
    
    try {
      await this.eventsService.updateEvent(event.id, {
        published: !event.published
      });
      event.published = !event.published;
      this.calculateStats();
    } catch (error) {
      console.error('Error updating event:', error);
      alert('حدث خطأ أثناء تحديث حالة النشر');
    }
  }

  viewEvent(eventId: string | undefined) {
    if (eventId) {
      window.open(`/events/${eventId}`, '_blank');
    }
  }

  editEvent(eventId: string | undefined) {
    if (eventId) {
      this.router.navigate(['/admin/events/edit', eventId]);
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
      day: 'numeric'
    }).format(date);
  }

  getEventImage(event: Event): string {
    return event.images && event.images.length > 0 
      ? event.images[0] 
      : 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80';
  }
}
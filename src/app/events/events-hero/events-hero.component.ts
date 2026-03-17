// src/app/components/events/events-hero/events-hero.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-hero.component.html',
  styleUrls: ['./events-hero.component.css']
})
export class EventsHeroComponent {
  pageTitle = 'الفعاليات والأحداث';
  pageSubtitle = 'تابع آخر الفعاليات والأنشطة الصحية في مستشفى ريفيتال';
}
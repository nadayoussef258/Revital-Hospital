// src/app/components/admin/admin-layout/admin-layout.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  isSidebarOpen = true;
  currentUserEmail: string | null = null;
  
  menuItems = [
    {
      icon: 'bi-speedometer2',
      label: 'لوحة التحكم',
      route: '/admin/dashboard',
      active: true
    },
     {
    icon: 'bi-calendar-event',
    label: 'الفعاليات',
    route: '/admin/events/list',
          active: false

  },
    {
      icon: 'bi-plus-circle',
      label: 'إضافة فعالية',
      route: '/admin/events/new',
      active: false
    },
    {
  icon: 'bi-envelope',
  label: 'الرسائل',
  route: '/admin/messages',
        active: false

},
    {
      icon: 'bi-globe',
      label: 'زيارة الموقع',
      route: '/',
      active: false,
      external: true
    }
  ];

  constructor(
    private authService:  AuthService,
    private router: Router
  ) {
    const user = this.authService.currentUserValue;
    this.currentUserEmail = user?.email || null;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  async logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
      try {
        await this.authService.logout();
        this.router.navigate(['/admin/login']);
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }

  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}
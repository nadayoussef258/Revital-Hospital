import { Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { ContactUsPageComponent } from './contactUsPage/contactUsPage.component';
import { AboutPageComponent } from './aboutPage/aboutPage.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactUsPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventDetailComponent },
  { path: 'services/:id', component: DepartmentDetailComponent },

  {
    path: 'admin/login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },

  {
    path: 'admin',
    loadComponent: () => import('./features/dashboard/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'events/list',
        loadComponent: () => import('./features/dashboard/admin-events-list/admin-events-list.component').then(m => m.AdminEventsListComponent)
      },
      {
        path: 'events/new',
        loadComponent: () => import('./features/dashboard/event-form/event-form.component').then(m => m.EventFormComponent)
      },
      {
        path: 'events/edit/:id',
        loadComponent: () => import('./features/dashboard/event-form/event-form.component').then(m => m.EventFormComponent)
      },
      {
        path: 'messages',
        loadComponent: () => import('./features/dashboard/messages/messages.component').then(m => m.MessagesComponent)
      }
    ]
  }
];
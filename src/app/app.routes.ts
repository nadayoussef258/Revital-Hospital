import { Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { ContactUsPageComponent } from './contactUsPage/contactUsPage.component';
import { AboutPageComponent } from './aboutPage/aboutPage.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminLayoutComponent } from './features/dashboard/admin-layout/admin-layout.component';
import { EventFormComponent } from './features/dashboard/event-form/event-form.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { MessagesComponent } from './features/dashboard/messages/messages.component';
import { AdminEventsListComponent } from './features/dashboard/admin-events-list/admin-events-list.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'contact', component: ContactUsPageComponent },
    {path:'about', component: AboutPageComponent},
    {
    path: 'services',
    component: ServicesPageComponent,
    data: { title: 'خدماتنا الطبية - مستشفى ريفيتال' }
  },
  {path:'events', component:EventsComponent},
  {path:'events/:id', component:EventDetailComponent},
  {
    path: 'services/:id',
    component: DepartmentDetailComponent,
    data: { title: 'تفاصيل القسم - مستشفى ريفيتال' }
  },
   {
    path: 'admin/login',
    component: LoginComponent,
    data: { title: 'تسجيل الدخول' }
  },
 
  // Admin routes with layout
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'لوحة التحكم' }
      },
       {
      path: 'events/list',
      component: AdminEventsListComponent  
    },
      {
        path: 'events/new',
        component: EventFormComponent,
        data: { title: 'إضافة فعالية جديدة' }
      },
      {
        path: 'events/edit/:id',
        component: EventFormComponent,
        data: { title: 'تعديل الفعالية' }
      },
       {
      path: 'messages',
      component: MessagesComponent,
      data: { title: 'الرسائل' }
    }
    ]
  }
];

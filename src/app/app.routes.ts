import { Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { ContactUsPageComponent } from './contactUsPage/contactUsPage.component';
import { AboutPageComponent } from './aboutPage/aboutPage.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'contact', component: ContactUsPageComponent },
    {path:'about', component: AboutPageComponent},
    {
    path: 'services',
    component: ServicesPageComponent,
    data: { title: 'خدماتنا الطبية - مستشفى ريفيتال' }
  },
  {
    path: 'services/:id',
    component: DepartmentDetailComponent,
    data: { title: 'تفاصيل القسم - مستشفى ريفيتال' }
  },
];

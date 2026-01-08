import { Routes } from '@angular/router';
import { HomePageComponent } from './homePage/homePage.component';
import { ContactUsPageComponent } from './aboutUsPage/contactUsPage.component';
import { AboutPageComponent } from './aboutPage/aboutPage.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'contact', component: ContactUsPageComponent },
    {path:'about', component: AboutPageComponent}
];

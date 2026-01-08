import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topBar',
  imports:[CommonModule],
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.css']
})
export class TopBarComponent  {

    contactInfo = {
    email: 'info@revital.ae',
    phone: '+971-4-555-0133',
    location: 'دبي، الإمارات',
    hours: 'السبت - الخميس: 9:00 صباحاً - 8:00 مساءً'
  };

  socialLinks = [
    { icon: 'facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'twitter', url: 'https://twitter.com', label: 'Twitter' }
  ];

}

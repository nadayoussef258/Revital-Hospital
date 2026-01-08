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
    email: 'info@revitalrehab.ae',
    phone: '+971-3-7144-444',
    location: 'العين، الإمارات',
    hours: 'السبت - الخميس: 9:00 صباحاً - 8:00 مساءً'
  };

  socialLinks = [
    { icon: 'facebook', url: 'https://www.facebook.com/revital.ae/', label: 'Facebook' },
    { icon: 'instagram', url: 'https://www.instagram.com/revital.hospital/', label: 'Instagram' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/revital-rehabilitation-hospital/', label: 'LinkedIn' },
  ];

}

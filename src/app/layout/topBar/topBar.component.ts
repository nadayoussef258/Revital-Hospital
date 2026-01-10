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
    email: 'info@staging.revitalrehab.ae',
    phone: '971-3-714-4444+',
    location: 'الفوعة ، العين ، أبو ظبي ',
    hours: '24/7'
  };

  socialLinks = [
    { icon: 'facebook', url: 'https://www.facebook.com/revital.ae/', label: 'Facebook' },
    { icon: 'instagram', url: 'https://www.instagram.com/revital.hospital/', label: 'Instagram' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/revital-rehabilitation-hospital/', label: 'LinkedIn' },
  ];

}

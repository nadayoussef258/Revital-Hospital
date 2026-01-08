// contact-cards.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-cards.component.html',
  styleUrls: ['./contact-cards.component.css']
})
export class ContactCardsComponent {
  cards = [
    {
      icon: 'bi-telephone-fill',
      title: 'اتصل بنا',
      details: [
        { label: '', value: '+971 3 714 4444' }
      ]
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'عنواننا',
      details: [
        // { label: '', value: 'شارع الشيخ زايد' },
        { label: '', value: 'الفوعة ، العين ، الإمارات العربية المتحدة' }
      ]
    },
    {
      icon: 'bi-envelope-fill',
      title: 'راسلنا',
      details: [
        { label: '', value: 'info@revitalrehab.ae' },
      ]
    }
  ];
}


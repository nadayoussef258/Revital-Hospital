import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  imports:[CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 features = [
    { icon: 'bi-shield-check', text: 'رعاية صحية آمنة وموثوقة' },
    { icon: 'bi-heart-pulse', text: 'أحدث التقنيات الطبية' },
    { icon: 'bi-people', text: 'فريق طبي متخصص ومحترف' },
    { icon: 'bi-clock-history', text: 'خدمة على مدار الساعة' }
  ];

  stats = [
    { number: '30+', label: 'عيادة متخصصة', icon: 'bi-hospital' },
    { number: '27K+', label: 'مريض راضٍ', icon: 'bi-emoji-smile' },
    { number: '60+', label: 'طبيب محترف', icon: 'bi-person-badge' }
  ];
}

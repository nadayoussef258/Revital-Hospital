import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
    imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 reasons = [
    {
      icon: 'bi-shield-check',
      title: 'الأمان والجودة',
      description: 'نضع سلامة مرضانا في المقام الأول، مع الالتزام بأعلى معايير الجودة العالمية في جميع خدماتنا الطبية.',
      color: 'primary'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'التطور المستمر',
      description: 'نستثمر في أحدث التقنيات الطبية ونطور كوادرنا باستمرار لضمان تقديم أفضل رعاية صحية ممكنة.',
      color: 'secondary'
    },
    {
      icon: 'bi-headset',
      title: 'دعم على مدار الساعة',
      description: 'فريقنا المتخصص متاح دائماً لمساعدتك والإجابة على استفساراتك في أي وقت من اليوم.',
      color: 'accent'
    }
  ];
}

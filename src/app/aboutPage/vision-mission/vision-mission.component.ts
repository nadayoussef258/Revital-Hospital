import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vision-mission',
    imports: [CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
items = [
    {
      title: 'رؤيتنا',
      icon: 'bi-eye',
      description: 'أن نكون مركز التميّز في الخدمات الطبية على مستوى المنطقة، من خلال تقديم حلول عالمية المستوى في الرعاية الطبية. ',
      bgClass: 'vision-card'
    },
    {
      title: 'رسالتنا',
      icon: 'bi-award',
      description: 'تقديم رعاية صحية عالية الجودة، من خلال التزامٍ لا يتهاون بالتميّز، ورفاهية المريض، وبالاعتماد على أحدث الأساليب، والبرامج للرعاية الصحية، مع شغفٍ فريد، والتزامٍ راسخ، ومسؤولية كاملة في تقديم خدمات رعاية صحية رفيعة المستوى.',
      bgClass: 'mission-card'
    },
    {
      title: 'مهمتنا',
      icon: 'bi-bullseye',
      description: 'تكرس مستشفى ريفيتال جهودها لتقديم رعاية عالية الجودة للمرضى مع الاهتمام المستمر بالتميز السريري ورضا المرضى .',
      bgClass: 'goals-card'
    }
  ];
}

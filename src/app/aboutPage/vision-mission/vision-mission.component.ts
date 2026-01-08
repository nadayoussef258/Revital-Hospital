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
      description: ' أن نكون خدمة إعادة التأهيل الطبي الرائدة في المنطقة،وأن نقدم حلولًا صحية عالمية المستوى تجمع بين التميز الطبي والرعاية الإنسانية، سنسعى جاهدين لنكون مركز التميز لجميع المرضى وأسرهم الذين يسعون للحصول على خدمات إعادة التأهيل.',
      bgClass: 'vision-card'
    },
    {
      title: 'رسالتنا',
      icon: 'bi-award',
      description: 'نلتزم بتقديم رعاية صحية شاملة ومتميزة باستخدام أحدث التقنيات الطبية، من خلال فريق طبي محترف ومؤهل، مع التركيز على راحة المريض وتحقيق أعلى معايير الجودة والسلامة.',
      bgClass: 'mission-card'
    },
    {
      title: 'مهمتنا',
      icon: 'bi-bullseye',
      description: 'تكرس مستشفى ريفيتال لإعادة التأهيل جهودها لتقديم رعاية عالية الجودة للمرضى مع الاهتمام المستمر بالتميز السريري ورضا المرضى .',
      bgClass: 'goals-card'
    }
  ];
}

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
      description: 'نطمح لأن نكون المؤسسة الطبية الرائدة في المنطقة، نقدم خدمات صحية عالمية المستوى تجمع بين التميز الطبي والرعاية الإنسانية، ونساهم في بناء مجتمع أكثر صحة وعافية.',
      bgClass: 'vision-card'
    },
    {
      title: 'رسالتنا',
      icon: 'bi-award',
      description: 'نلتزم بتقديم رعاية صحية شاملة ومتميزة باستخدام أحدث التقنيات الطبية، من خلال فريق طبي محترف ومؤهل، مع التركيز على راحة المريض وتحقيق أعلى معايير الجودة والسلامة.',
      bgClass: 'mission-card'
    },
    {
      title: 'أهدافنا',
      icon: 'bi-bullseye',
      description: 'تحقيق التميز في تقديم الخدمات الطبية، تطوير مستمر لكفاءة الكوادر الطبية، الاستثمار في أحدث التقنيات الطبية، وبناء علاقات طويلة الأمد مع مرضانا تقوم على الثقة والاحترام.',
      bgClass: 'goals-card'
    }
  ];
}

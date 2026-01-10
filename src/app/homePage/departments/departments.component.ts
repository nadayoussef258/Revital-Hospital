// departments.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Department {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="departments-section py-5" id="departments">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-label">أقسامنا الطبية</p>
          <h2 class="section-title">
            رعاية طبية متخصصة في جميع المجالات
          </h2>
          <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let dept of departments">
            <div class="department-card h-100">
              <div class="department-icon">
                <i [class]="'bi bi-' + dept.icon"></i>
              </div>
              
              <h3 class="department-title">{{ dept.title }}</h3>
              
              <p class="department-description">{{ dept.description }}</p>
              
              <ul class="features-list">
                <li *ngFor="let feature of dept.features">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
         <!-- More Services Button -->
        <div class="text-center mt-5 pt-4">
          <button class="btn-more-services" (click)="navigateToServices()">
            <span class="btn-text">استكشف جميع أقسامنا</span>
            <i class="bi bi-arrow-left btn-icon"></i>
            <div class="btn-shine"></div>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .departments-section {
      background-color: #FFFFFF;
      padding: 80px 0;
      direction: rtl;
      font-family: 'Cairo', 'Tajawal', sans-serif;
    }

    .section-label {
      color: #2E7DB5;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .section-title {
      color: #1A2332;
      font-size: 42px;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 20px;
    }

    .title-underline {
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #2E7DB5, #68A8D8);
      margin-bottom: 50px;
    }

    .department-card {
      background-color: #F5F8FA;
      padding: 40px 30px;
      border-radius: 15px;
      border: 2px solid #E1E8ED;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      text-align: center;
    }

    .department-card::before {
      content: '';
      position: absolute;
      top: 0;
      right: -100%;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #2E7DB5, #68A8D8, #A8D0ED);
      transition: right 0.4s ease;
    }

    .department-card:hover::before {
      right: 0;
    }

    .department-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(46, 125, 181, 0.15);
      background-color: #FFFFFF;
      border-color: #68A8D8;
    }

    .department-icon {
      width: 90px;
      height: 90px;
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      box-shadow: 0 5px 20px rgba(46, 125, 181, 0.2);
      transition: all 0.3s ease;
    }

    .department-card:hover .department-icon {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 10px 30px rgba(46, 125, 181, 0.3);
    }

    .department-icon i {
      font-size: 42px;
      color: #FFFFFF;
    }

    .department-title {
      color: #1A2332;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    .department-description {
      color: #5A6C7D;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 25px;
    }

    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: right;
    }

    .features-list li {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      gap: 12px;
    }

    .features-list i {
      color: #4CAF50;
      font-size: 18px;
      flex-shrink: 0;
    }

    .features-list span {
      color: #5A6C7D;
      font-size: 15px;
      line-height: 1.5;
      font-weight: 500;
    }
    /* More Services Button */
    .btn-more-services {
      background: linear-gradient(135deg, #2E7DB5 0%, #68A8D8 100%);
      color: white;
      border: none;
      padding: 18px 50px;
      font-size: 18px;
      font-weight: 700;
      border-radius: 50px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 25px rgba(46, 125, 181, 0.3);
      display: inline-flex;
      align-items: center;
      gap: 12px;
      z-index: 1;
    }

    .btn-more-services::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #68A8D8 0%, #A8D0ED 100%);
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: -1;
    }

    .btn-more-services:hover::before {
      opacity: 1;
    }

    .btn-more-services:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 15px 40px rgba(46, 125, 181, 0.4);
    }

    .btn-more-services:active {
      transform: translateY(-2px) scale(1.02);
    }

    .btn-text {
      position: relative;
      z-index: 1;
    }

    .btn-icon {
      font-size: 20px;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      z-index: 1;
    }

    .btn-more-services:hover .btn-icon {
      transform: translateX(-8px);
      animation: arrowBounce 0.6s ease-in-out infinite;
    }

    @keyframes arrowBounce {
      0%, 100% { transform: translateX(-8px); }
      50% { transform: translateX(-14px); }
    }

    .btn-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
      );
      transition: left 0.6s ease;
    }

    .btn-more-services:hover .btn-shine {
      left: 100%;
    }


    @media (max-width: 768px) {
        .btn-more-services {
        padding: 16px 40px;
        font-size: 16px;
      }

      .btn-icon {
        font-size: 18px;
      }
      .departments-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 32px;
      }
      
      .department-card {
        padding: 30px 20px;
      }

      .department-icon {
        width: 80px;
        height: 80px;
      }

      .department-icon i {
        font-size: 36px;
      }
    }
  `]
})
export class DepartmentsComponent {
    constructor(private router: Router) {}

   navigateToServices(): void {
    this.router.navigate(['/services']);
  }
 departments: Department[] = [
   {
    icon: 'heart-pulse-fill',
    title: 'الطب الطبيعي والتأهيل',
    description: 'برامج تأهيلية متخصصة لاستعادة الوظائف وتحسين جودة الحياة من خلال علاج متكامل للسكتات الدماغية وإصابات الدماغ والآلام المزمنة.',
    features: [
      'تأهيل السكتات الدماغية وإصابات الدماغ',
      'إدارة الألم المزمن والحاد',
      'تدريب مهارات العناية الذاتية',
      'الدعم النفسي والأسري'
    ]
  },
  {
    icon: 'bandaid-fill',
    title: 'جراحة العظام والطب الرياضي',
    description: 'رعاية متكاملة للجهاز العضلي الهيكلي تشمل جراحة العظام، الطب الرياضي، وإعادة التأهيل مع فريق طبي مدرب على أعلى مستوى.',
    features: [
      'جراحة العظام والكسور',
      'علاج الإصابات الرياضية',
      'الطب التجديدي وعيادة الألم',
      'خدمة الرأي الطبي الثاني'
    ]
  },
  {
    icon: 'lightning-charge-fill',
    title: 'العلاجات المتقدمة',
    description: 'تقنيات علاجية حديثة تشمل العلاج المائي، التدريب الروبوتي، التبريد الكامل للجسم، والإبر الجافة لتحقيق أفضل النتائج العلاجية.',
    features: [
      'العلاج المائي بأحدث التقنيات',
      'التدريب الحركي الروبوتي',
      'العلاج بالتبريد الكامل للجسم',
      'العلاج بالإبر الجافة'
    ]
  },
  // {
  //   icon: 'capsule-pill',
  //   title: 'خدمات الصيدلية',
  //   description: 'صيدلية متكاملة داخل المستشفى توفر الأدوية والاستشارات الدوائية للمرضى.',
  //   features: [
  //     'صرف الوصفات الطبية',
  //     'استشارات دوائية',
  //     'خدمات سريعة'
  //   ]
  // },
  // {
  //   icon: 'speedometer2',
  //   title: 'العلاج المهني والتكميل الصحي',
  //   description: 'وحدة متخصصة في العلاج المهني والعلاج التكملي لتحسين جودة حياة المرضى.',
  //   features: [
  //     'علاج مهني فعال',
  //     'خدمات دعم الحركة',
  //     'برنامج تدريب مخصص'
  //   ]
  // },
  // {
  //   icon: 'bar-chart-line',
  //   title: 'تحليل الحركة واللياقة',
  //   description: 'استخدام تقنية تحليل المشي والتدريب المتقدم لتحسين التوازن والحركة.',
  //   features: [
  //     'تحليل المشي المتقدم',
  //     'برامج تعديل الحركة',
  //     'تدريب متخصص للمرضى'
  //   ]
  // }
];

}
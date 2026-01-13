// services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Service {
  image?: string; // صورة اختيارية
  icon?: string; // أيقون احتياطي
  title: string;
  titleEn: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section py-5" id="services">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-label">خدماتنا الطبية</p>
          <h2 class="section-title">
            خدمات رعاية صحية شاملة ومتكاملة
          </h2>
          <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let service of services">
            <div class="service-card h-100">
              <!-- عرض الصورة إذا كانت موجودة -->
<div class="service-image-wrapper" *ngIf="service.image">
  <img [src]="service.image" ...>
  <div class="image-overlay"></div>
</div>

<!-- عرض الأيقون إذا لم تكن الصورة موجودة -->
<div class="service-icon" *ngIf="!service.image">
  <i [class]="'bi bi-' + service.icon"></i>
</div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-title-en">{{ service.titleEn }}</p>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
        <!-- More Services Button -->
        <div class="text-center mt-5 pt-4">
          <button class="btn-more-services" (click)="navigateToServices()">
            <span class="btn-text">استكشف جميع خدماتنا</span>
            <i class="bi bi-arrow-left btn-icon"></i>
            <div class="btn-shine"></div>
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background: linear-gradient(135deg, #F5F8FA 0%, #E8F3F9 100%);
      padding: 80px 0;
      direction: rtl;
      font-family: 'Cairo', 'Tajawal', sans-serif;
      position: relative;
      overflow: hidden;
    }

    .services-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(46, 125, 181, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(168, 208, 237, 0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .container {
      position: relative;
      z-index: 1;
    }

    .section-label {
      color: #2E7DB5;
      font-weight: 700;
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 12px;
      display: inline-block;
      padding: 8px 20px;
      background: rgba(46, 125, 181, 0.08);
      border-radius: 25px;
    }

    .section-title {
      color: #1A2332;
      font-size: 42px;
      font-weight: 800;
      line-height: 1.3;
      margin-bottom: 20px;
    }

    .title-underline {
      width: 100px;
      height: 5px;
      background: linear-gradient(90deg, #2E7DB5, #68A8D8, #A8D0ED);
      margin-bottom: 50px;
      border-radius: 10px;
    }

    .service-card {
      background: #FFFFFF;
      padding: 45px 35px;
      border-radius: 20px;
      border: 2px solid transparent;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 20px rgba(46, 125, 181, 0.08);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      background: linear-gradient(90deg, #2E7DB5, #68A8D8, #A8D0ED);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .service-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 50% 0%, rgba(46, 125, 181, 0.03), transparent 70%);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .service-card:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }

    .service-card:hover::after {
      opacity: 1;
    }

    .service-card:hover {
      transform: translateY(-12px);
      box-shadow: 0 20px 50px rgba(46, 125, 181, 0.18);
      border-color: rgba(104, 168, 216, 0.3);
    }

    .service-icon, .service-image-wrapper {
      width: 100px;
      height: 100px;
      background: linear-gradient(135deg, #E8F3F9 0%, #F5F8FA 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 25px rgba(46, 125, 181, 0.12);
      position: relative;
      z-index: 1;
    }

    .service-icon::before {
      content: '';
      position: absolute;
      inset: -3px;
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: -1;
    }

    .service-card:hover .service-icon {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 15px 40px rgba(46, 125, 181, 0.25);
    }

    .service-card:hover .service-icon::before {
      opacity: 1;
    }

    .service-icon i {
      font-size: 48px;
      color: #2E7DB5;
      transition: all 0.4s ease;
    }

    .service-card:hover .service-icon i {
      color: #FFFFFF;
      transform: scale(1.1);
    }

    .service-title {
      color: #1A2332;
      font-size: 26px;
      font-weight: 800;
      margin-bottom: 8px;
      line-height: 1.4;
      transition: color 0.3s ease;
    }

    .service-card:hover .service-title {
      color: #2E7DB5;
    }

    .service-title-en {
      color: #336286ff;
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 1.5px;
      margin-bottom: 18px;
      opacity: 0.85;
      direction: ltr;
    }

    .service-description {
      color: #5A6C7D;
      font-size: 16px;
      line-height: 1.9;
      margin-bottom: 0;
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
      .services-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 32px;
      }
      
      .service-card {
        padding: 35px 25px;
      }

      .service-icon {
        width: 85px;
        height: 85px;
      }

      .service-icon i {
        font-size: 40px;
      }

      .service-title {
        font-size: 22px;
      }

      .service-title-en {
        font-size: 12px;
      }

      .service-description {
        font-size: 15px;
      }

      .btn-more-services {
        padding: 16px 40px;
        font-size: 16px;
      }

      .btn-icon {
        font-size: 18px;
      }
    }
  `]
})
export class ServicesComponent {
  constructor(private router: Router) {}

   navigateToServices(): void {
    this.router.navigate(['/services']);
  }
  services: Service[] = [
    {
      icon: 'hospital',
      title: 'العيادات الخارجية التخصصية',
      titleEn: 'Specialized Outpatient Clinics',
      description: 'تضم طب الأسرة، الباطني، الأطفال، الأسنان، والجراحة العامة لتقديم رعاية طبية أولية متكاملة.'
    },
    {
      image: 'assets/bones-icon.png',
      title: 'جراحة العظام والطب الرياضي',
      titleEn: 'Orthopedics & Sports Medicine',
      description: 'خدمات متخصصة في جراحة العظام، الطب الفيزيائي والتأهيل، وعلاج الإصابات الرياضية.'
    },
    {
      icon: 'droplet',
      title: 'العلاج المائي',
      titleEn: 'Hydrotherapy',
      description: 'تخفيف آلام المفاصل والظهر، تحسين الحركة، وتأهيل ما بعد الإصابات أو الجراحة باستخدام الماء.'
    },
    {
      icon: 'thermometer-snow',
      title: 'مختبر الثلج',
      titleEn: 'Ice Lab',
      description: 'علاج الجسم بالتبريد لتقليل الالتهابات، تورم العضلات، وتحسين الدورة الدموية والأداء البدني.'
    },
    {
      icon: 'person-check',
      title: 'خدمات المعالجة المتخصصة',
      titleEn: 'Specialized Therapy Services',
      description: 'تشمل العلاج الوظيفي، العلاج الطبيعي، العلاج التنفسي، وعلاج النطق واللغة.'
    },
    {
      icon: 'clipboard-plus',
      title: 'الطب الصيني والبديل',
      titleEn: 'Chinese & Alternative Medicine',
      description: 'نقدم جلسات الوخز بالإبر الصينية والحجامة لعلاج الألم المزمن، التوتر، واضطرابات النوم.'
    },
    // {
    //   icon: 'lightning-charge',
    //   title: 'التقنيات العلاجية الحديثة',
    //   titleEn: 'Advanced Therapeutic Technologies',
    //   description: 'العلاج بالمغناطيسية لسلس البول، العلاج بالتيرا هيرتز، والعلاج بالتسريب الوريدي.'
    // },
    // {
    //   icon: 'heart-pulse',
    //   title: 'التغذية والحمية الغذائية',
    //   titleEn: 'Nutrition & Dietetics',
    //   description: 'استشارات تغذية متخصصة لتعزيز الصحة العامة ودعم الخطط العلاجية للمرضى.'
    // },
    // {
    //   icon: 'activity',
    //   title: 'تحليل طريقة المشي والتدريب',
    //   titleEn: 'Gait Analysis & Training',
    //   description: 'استخدام تقنيات عالية الدقة لتحليل الحركة وتصميم برامج تأهيلية متخصصة لتحسين التوازن والمشي.'
    // }
  ];
}
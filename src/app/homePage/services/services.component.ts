// services.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
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
              <div class="service-icon">
                <i [class]="'bi bi-' + service.icon"></i>
              </div>
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background-color: #F5F8FA;
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

    .service-card {
      background-color: #FFFFFF;
      padding: 40px 30px;
      border-radius: 15px;
      border: 2px solid #E1E8ED;
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(46, 125, 181, 0.05);
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
      height: 4px;
      background: linear-gradient(90deg, #2E7DB5, #68A8D8, #A8D0ED);
      transform: scaleX(0);
      transition: transform 0.4s ease;
    }

    .service-card:hover::before {
      transform: scaleX(1);
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(46, 125, 181, 0.15);
      border-color: #68A8D8;
    }

    .service-icon {
      width: 90px;
      height: 90px;
      background: linear-gradient(135deg, #E8F3F9, #FFFFFF);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      transition: all 0.4s ease;
      box-shadow: 0 5px 20px rgba(46, 125, 181, 0.1);
    }

    .service-card:hover .service-icon {
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      transform: scale(1.1) rotate(360deg);
      box-shadow: 0 10px 30px rgba(46, 125, 181, 0.3);
    }

    .service-icon i {
      font-size: 42px;
      color: #2E7DB5;
      transition: all 0.3s ease;
    }

    .service-card:hover .service-icon i {
      color: #FFFFFF;
    }

    .service-title {
      color: #1A2332;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    .service-description {
      color: #5A6C7D;
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 0;
    }

    @media (max-width: 768px) {
      .services-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 32px;
      }
      
      .service-card {
        padding: 30px 20px;
      }

      .service-icon {
        width: 80px;
        height: 80px;
      }

      .service-icon i {
        font-size: 36px;
      }

      .service-title {
        font-size: 22px;
      }

      .service-description {
        font-size: 15px;
      }
    }
  `]
})
export class ServicesComponent {
  services: Service[] = [
  {
    icon: 'hospital',
    title: 'العيادات الخارجية التخصصية',
    description: 'تضم طب الأسرة، الباطني، الأطفال، الأسنان، والجراحة العامة لتقديم رعاية طبية أولية متكاملة.'
  },
  {
    icon: 'activity',
    title: 'جراحة العظام والطب الرياضي',
    description: 'خدمات متخصصة في جراحة العظام، الطب الفيزيائي والتأهيل، وعلاج الإصابات الرياضية.'
  },
  {
    icon: 'droplet',
    title: 'العلاج المائي (Hydrotherapy)',
    description: 'تخفيف آلام المفاصل والظهر، تحسين الحركة، وتأهيل ما بعد الإصابات أو الجراحة باستخدام الماء.'
  },
  {
    icon: 'thermometer-snow',
    title: 'مختبر الثلج (Cryotherapy)',
    description: 'علاج الجسم بالتبريد لتقليل الالتهابات، تورم العضلات، وتحسين الدورة الدموية والأداء البدني.'
  },
  {
    icon: 'person-check',
    title: 'خدمات المعالجة المتخصصة',
    description: 'تشمل العلاج الوظيفي، العلاج الطبيعي، العلاج التنفسي، وعلاج النطق واللغة.'
  },
  {
    icon: 'clipboard-plus',
    title: 'الطب الصيني والبديل',
    description: 'نقدم جلسات الوخز بالإبر الصينية والحجامة لعلاج الألم المزمن، التوتر، واضطرابات النوم.'
  },
  {
    icon: 'lightning-charge',
    title: 'التقنيات العلاجية الحديثة',
    description: 'العلاج بالمغناطيسية لسلس البول، العلاج بالتيرا هيرتز، والعلاج بالتسريب الوريدي.'
  },
  {
    icon: 'apple',
    title: 'التغذية والحمية الغذائية',
    description: 'استشارات تغذية متخصصة لتعزيز الصحة العامة ودعم الخطط العلاجية للمرضى.'
  },
  {
    icon: 'lightning-charge',
    title: 'العلاج بالتيرا هيرتز (Terahertz)',
    description: 'تقنية غير جراحية مبتكرة لتعزيز تعافي الأنسجة، تحسين الدورة الدموية، ودعم الجهاز العصبي والقلب.'
  },
  {
    icon: 'activity',
    title: 'تحليل طريقة المشي والتدريب',
    description: 'استخدام تقنيات عالية الدقة لتحليل الحركة وتصميم برامج تأهيلية متخصصة لتحسين التوازن والمشي.'
  },
  {
    icon: 'shield-check',
    title: 'علاج سلس البول بالمغناطيس',
    description: 'جلسات غير مؤلمة لتقوية عضلات قاع الحوض وتحسين التحكم في المثانة والأمعاء لرفع جودة الحياة.'
  },
  {
    icon: 'fire',
    title: 'العلاج بالكي (Moxibustion)',
    description: 'من طب الطب البديل لتعزيز المناعة، تخفيف الألم والتيبس، وتحسين الصحة العامة والجهاز الهضمي.'
  },
  {
    icon: 'heart-pulse',
    title: 'الرعاية المتكاملة للأسنان والتغذية',
    description: 'نهج فريد يربط بين صحة الفم والنظام الغذائي للوقاية من أمراض السمنة والسكري ودعم الفئات الأكثر عرضة للخطر.'
  },
  {
    icon: 'hospital',
    title: 'منشأة تنويم المرضى الداخليين',
    description: 'غرف إقامة مجهزة بأعلى معايير الراحة لتقديم رعاية طبية متكاملة على مدار 24 ساعة تحت إشراف فريق متخصص.'
  },
  {
    icon: 'clipboard2-pulse',
    title: 'الخدمات التشخيصية المخبرية',
    description: 'مختبر مجهز بأحدث التقنيات لإجراء كافة الفحوصات الطبية الدقيقة لدعم خطط العلاج والوقاية.'
  }
];

}
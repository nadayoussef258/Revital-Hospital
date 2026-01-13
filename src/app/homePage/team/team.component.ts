// team.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Doctor {
  name: string;
  specialty: string;
  gender: 'male' | 'female';
  image: string; // إضافة حقل الصورة
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="team-section py-5" id="team">
      <div class="container">
        <div class="text-center mb-5">
          <p class="section-label">أطباؤنا المتميزون</p>
          <h2 class="section-title">
            فريق طبي محترف وودود لخدمتكم
          </h2>
          <div class="title-underline mx-auto"></div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6" *ngFor="let doctor of doctors">
            <div class="doctor-card">
              <div class="doctor-image-wrapper">
                <img [src]="doctor.image" 
                     [alt]="doctor.name" 
                     class="doctor-image"
                     loading="lazy">
                <div class="image-overlay"></div>
              </div>
              
              <div class="doctor-info">
                <h3 class="doctor-name">{{ doctor.name }}</h3>
                <p class="doctor-specialty">{{ doctor.specialty }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-section {
      background-color: #F5F8FA;
      padding: 80px 0;
      direction: rtl;
      font-family: 'Cairo', 'Tajawal', sans-serif;
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

    .doctor-card {
      background: #FFFFFF;
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      box-shadow: 0 5px 20px rgba(46, 125, 181, 0.08);
      transition: all 0.3s ease;
      border: 1px solid #E8F3F9;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .doctor-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(46, 125, 181, 0.15);
      border-color: #A8D0ED;
    }

    .doctor-image-wrapper {
      margin-bottom: 25px;
      position: relative;
      width: 160px;
      height: 160px;
      margin-left: auto;
      margin-right: auto;
    }

    .doctor-image {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid #FFFFFF;
      box-shadow: 0 8px 25px rgba(46, 125, 181, 0.25);
      transition: all 0.4s ease;
      position: relative;
      z-index: 2;
    }

    .image-overlay {
      position: absolute;
      inset: -8px;
      border-radius: 50%;
      border: 2px solid rgba(46, 125, 181, 0.2);
      transition: all 0.4s ease;
      z-index: 1;
    }

    .doctor-card:hover .doctor-image {
      transform: scale(1.05);
      box-shadow: 0 12px 35px rgba(46, 125, 181, 0.35);
      border-color: #A8D0ED;
    }

    .doctor-card:hover .image-overlay {
      inset: -12px;
      border-color: rgba(46, 125, 181, 0.3);
    }

    .doctor-info {
      width: 100%;
    }

    .doctor-name {
      color: #1A2332;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
      line-height: 1.3;
    }

    .doctor-specialty {
      color: #5A6C7D;
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0;
      line-height: 1.5;
    }

    @media (max-width: 768px) {
      .team-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 32px;
      }
      
      .doctor-card {
        padding: 25px;
      }

      .doctor-image-wrapper {
        width: 140px;
        height: 140px;
      }

      .doctor-name {
        font-size: 20px;
      }

      .doctor-specialty {
        font-size: 15px;
      }
    }
  `]
})
export class TeamComponent {
  doctors: Doctor[] = [
    {
      name: 'د. إبراهيم حسن',
      specialty: 'أخصائي طب الأطفال',
      gender: 'male',
      image: 'assets/male-icon.png'
    },
    {
      name: 'د. عمر مهدي',
      specialty: 'أخصائي جراحة العظام والإصابات',
      gender: 'male',
      image: 'assets/male-icon.png'
    },
    {
      name: 'د. إيمان عمر عبدالله',
      specialty: 'أخصائي الطب الباطني',
      gender: 'female',
      image: 'assets/female-icon.png'
    },
    {
      name: 'د. إيهاب صادق',
      specialty: 'طبيب أسنان',
      gender: 'male',
      image: 'assets/male-icon.png'
    },
    {
      name: 'د. فاطمة خيري',
      specialty: 'طبيب عام',
      gender: 'female',
      image: 'assets/female-icon.png'
    },
    {
      name: 'د. محمود ياسين رحال',
      specialty: 'المدير العام',
      gender: 'male',
      image: 'assets/male-icon.png'
    }
  ];
}
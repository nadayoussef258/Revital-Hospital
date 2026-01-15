// team.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Doctor {
  name: string;
  specialty: string;
  gender: 'male' | 'female';
  image: string;
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
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(46, 125, 181, 0.08);
      transition: all 0.3s ease;
      border: 1px solid #E8F3F9;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .doctor-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(46, 125, 181, 0.15);
      border-color: #A8D0ED;
    }

    .doctor-image-wrapper {
      position: relative;
      width: 100%;
      height: 350px;
      overflow: hidden;
    }

    .doctor-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.4s ease;
      position: relative;
      z-index: 2;
    }

    .image-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(46, 125, 181, 0.3) 0%,
        rgba(46, 125, 181, 0.1) 50%,
        transparent 100%
      );
      opacity: 0;
      transition: all 0.4s ease;
      z-index: 3;
    }

    .doctor-card:hover .doctor-image {
      transform: scale(1.08);
    }

    .doctor-card:hover .image-overlay {
      opacity: 1;
    }

    .doctor-info {
      padding: 25px 30px;
      text-align: center;
      background: #FFFFFF;
      position: relative;
      z-index: 4;
    }

    .doctor-name {
      color: #2E7DB5;
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

      .doctor-image-wrapper {
        height: 280px;
      }
      
      .doctor-info {
        padding: 20px 25px;
      }

      .doctor-name {
        font-size: 20px;
      }

      .doctor-specialty {
        font-size: 15px;
      }
    }

    @media (max-width: 576px) {
      .doctor-image-wrapper {
        height: 320px;
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
      image: 'assets/ibrahim.jpg'
    },
    {
      name: 'د. عمر مهدي',
      specialty: 'أخصائي جراحة العظام والإصابات',
      gender: 'male',
      image: 'assets/omar.jpg'
    },
    {
      name: 'د. إيمان عمر عبدالله',
      specialty: 'أخصائي الطب الباطني',
      gender: 'female',
      image: 'assets/eman.jpg'
    },
    {
      name: 'د. إيهاب صادق',
      specialty: 'طبيب أسنان',
      gender: 'male',
      image: 'assets/Artboard 1.jpg' 
    },
    {
      name: 'د. فاطمة خيري',
      specialty: 'طبيب عام',
      gender: 'female',
      image: 'assets/fatma.jpg'
    },
    {
      name: 'د. محمود ياسين رحال',
      specialty: 'المدير العام',
      gender: 'male',
      image: 'https://durgacityhospital.com/wp-content/uploads/2024/10/Dummy-adobe-stck-img-1.jpg'
    }
  ];
}
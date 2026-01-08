// team.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Doctor {
  name: string;
  specialty: string;
  image: string;
  experience: string;
  education: string;
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
                     class="doctor-image">
                <div class="doctor-overlay">
                  <div class="social-links">
                    <a href="#" class="social-icon" aria-label="Facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="social-icon" aria-label="Twitter">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="social-icon" aria-label="LinkedIn">
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="#" class="social-icon" aria-label="Instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="doctor-info">
                <h3 class="doctor-name">{{ doctor.name }}</h3>
                <p class="doctor-specialty">{{ doctor.specialty }}</p>
                <div class="doctor-details">
                  <div class="detail-item">
                    <i class="bi bi-award"></i>
                    <span>{{ doctor.experience }}</span>
                  </div>
                  <div class="detail-item">
                    <i class="bi bi-mortarboard"></i>
                    <span>{{ doctor.education }}</span>
                  </div>
                </div>
                <!-- <button class="btn-appointment">
                  احجز موعد
                  <i class="bi bi-calendar-check"></i>
                </button> -->
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

    .doctor-card {
      background-color: #FFFFFF;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(46, 125, 181, 0.1);
      transition: all 0.4s ease;
    }

    .doctor-card:hover {
      transform: translateY(-15px);
      box-shadow: 0 20px 50px rgba(46, 125, 181, 0.2);
    }

    .doctor-image-wrapper {
      position: relative;
      overflow: hidden;
      height: 400px;
    }

    .doctor-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .doctor-card:hover .doctor-image {
      transform: scale(1.1);
    }

    .doctor-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, transparent 0%, rgba(46, 125, 181, 0.9) 100%);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      padding: 30px;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .doctor-card:hover .doctor-overlay {
      opacity: 1;
    }

    .social-links {
      display: flex;
      gap: 15px;
    }

    .social-icon {
      width: 45px;
      height: 45px;
      background-color: #FFFFFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #2E7DB5;
      text-decoration: none;
      transition: all 0.3s ease;
      transform: translateY(20px);
      opacity: 0;
    }

    .doctor-card:hover .social-icon {
      transform: translateY(0);
      opacity: 1;
    }

    .doctor-card:hover .social-icon:nth-child(1) { transition-delay: 0.1s; }
    .doctor-card:hover .social-icon:nth-child(2) { transition-delay: 0.2s; }
    .doctor-card:hover .social-icon:nth-child(3) { transition-delay: 0.3s; }
    .doctor-card:hover .social-icon:nth-child(4) { transition-delay: 0.4s; }

    .social-icon:hover {
      background-color: #68A8D8;
      color: #FFFFFF;
      transform: translateY(-5px);
    }

    .doctor-info {
      padding: 30px;
      text-align: center;
    }

    .doctor-name {
      color: #2E7DB5;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .doctor-specialty {
      color: #5A6C7D;
      font-size: 16px;
      margin-bottom: 20px;
      font-weight: 500;
    }

    .doctor-details {
      margin-bottom: 25px;
    }

    .detail-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 10px;
      color: #5A6C7D;
      font-size: 14px;
    }

    .detail-item i {
      color: #2E7DB5;
      font-size: 18px;
    }

    .btn-appointment {
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      color: #FFFFFF;
      border: none;
      padding: 12px 35px;
      border-radius: 25px;
      font-weight: 600;
      font-size: 16px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 5px 15px rgba(46, 125, 181, 0.3);
    }

    .btn-appointment:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(46, 125, 181, 0.4);
      background: linear-gradient(135deg, #68A8D8, #A8D0ED);
    }

    .btn-appointment i {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      .team-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 32px;
      }
      
      .doctor-image-wrapper {
        height: 350px;
      }

      .doctor-name {
        font-size: 22px;
      }

      .btn-appointment {
        padding: 10px 30px;
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
      image: 'https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg',
      experience: '+15 سنة خبرة',
      education: 'كلية الطب جامعة هارفارد'
    },
    {
      name: 'د. عمر مهدي',
      specialty: 'أخصائي جراحة العظام والإصابات',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600',
      experience: '+12 سنة خبرة',
      education: 'جامعة جونز هوبكنز'
    },
    {
      name: 'د.  إيمان عمر عبدالله',
      specialty: 'أخصائي الطب الباطني',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600',
      experience: '+10 سنوات خبرة',
      education: 'كلية الطب جامعة ستانفورد'
    },
    {
      name: 'د. إيهاب صادق',
      specialty: '  طبيب أسنان',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600',
      experience: '+18 سنة خبرة',
      education: 'كلية الطب جامعة ييل'
    },
    {
      name: 'د. فاطمة خيري',
      specialty: '  طبيب عام',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600',
      experience: '+8 سنوات خبرة',
      education: 'جامعة كولومبيا'
    },
    {
      name: 'د. محمود ياسين رحال',
      specialty: '  المدير العام',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600',
      experience: '+20 سنة خبرة',
      education: 'عيادة مايو كلينك'
    }
  ];
}
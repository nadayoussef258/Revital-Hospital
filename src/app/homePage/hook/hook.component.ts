// hook.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hook',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hook-section">
      <div class="hook-overlay"></div>
      <div class="container position-relative">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="hook-content">
              <h2 class="hook-title animate-fade-in">
                خصم 30% على جميع خدماتنا الطبية هذا الأسبوع
              </h2>
              <p class="hook-description animate-fade-in-delay">
                استفد من عرضنا الخاص! احصل على خصم 30% على جميع الخدمات الطبية 
                هذا الأسبوع. اجعل صحتك أولوية مع رعاية طبية متميزة بأسعار لا تُقاوم.
                في مستشفى ريفيتال، نلتزم بتقديم أفضل الخدمات الصحية لكم ولعائلاتكم.
              </p>
              <button class="btn-book animate-fade-in-delay-2">
                احجز الآن
                <i class="bi bi-calendar-check ms-2"></i>
              </button>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="hook-badge">
              <div class="badge-circle">
                <div class="badge-inner">
                  <span class="discount-text">30%</span>
                  <span class="off-text">خصم</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="floating-elements">
          <div class="float-icon float-1">
            <i class="bi bi-heart-pulse"></i>
          </div>
          <div class="float-icon float-2">
            <i class="bi bi-capsule"></i>
          </div>
          <div class="float-icon float-3">
            <i class="bi bi-clipboard2-pulse"></i>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hook-section {
      position: relative;
      background: linear-gradient(135deg, #1a4d7a 0%, #2E7DB5 50%, #3d8ac4 100%);
      padding: 100px 0;
      overflow: hidden;
      direction: rtl;
      font-family: 'Cairo', 'Tajawal', sans-serif;
    }

    .hook-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 50%, rgba(168, 208, 237, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(104, 168, 216, 0.1) 0%, transparent 50%);
      pointer-events: none;
    }

    .hook-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200');
      background-size: cover;
      background-position: center;
      opacity: 0.08;
      mix-blend-mode: overlay;
    }

    .hook-content {
      position: relative;
      z-index: 2;
    }

    .hook-title {
      color: #FFFFFF;
      font-size: 48px;
      font-weight: 800;
      line-height: 1.3;
      margin-bottom: 25px;
      text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    }

    .hook-description {
      color: rgba(255, 255, 255, 0.95);
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 35px;
      max-width: 600px;
    }

    .btn-book {
      background-color: #FFFFFF;
      color: #2E7DB5;
      border: none;
      padding: 16px 45px;
      border-radius: 30px;
      font-weight: 700;
      font-size: 18px;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      gap: 10px;
    }

    .btn-book:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
      background-color: #68A8D8;
      color: #FFFFFF;
    }

    .btn-book i {
      font-size: 20px;
    }

    .hook-badge {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .badge-circle {
      width: 280px;
      height: 280px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        0 0 0 20px rgba(255, 255, 255, 0.1),
        0 0 0 40px rgba(255, 255, 255, 0.05),
        0 20px 60px rgba(0, 0, 0, 0.3);
      animation: pulse-badge 3s ease-in-out infinite;
      backdrop-filter: blur(10px);
    }

    .badge-inner {
      width: 220px;
      height: 220px;
      background: linear-gradient(135deg, #FFFFFF, #f0f8ff);
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: inset 0 5px 20px rgba(46, 125, 181, 0.2);
    }

    .discount-text {
      color: #2E7DB5;
      font-size: 72px;
      font-weight: 900;
      line-height: 1;
      text-shadow: 2px 2px 4px rgba(46, 125, 181, 0.2);
    }

    .off-text {
      color: #68A8D8;
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 2px;
    }

    .floating-elements {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
    }

    .float-icon {
      position: absolute;
      width: 60px;
      height: 60px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      border: 2px solid rgba(255, 255, 255, 0.2);
    }

    .float-icon i {
      color: rgba(255, 255, 255, 0.8);
      font-size: 28px;
    }

    .float-1 {
      top: 10%;
      right: 10%;
      animation: float-animation 6s ease-in-out infinite;
    }

    .float-2 {
      top: 60%;
      left: 15%;
      animation: float-animation 8s ease-in-out infinite 2s;
    }

    .float-3 {
      bottom: 15%;
      right: 20%;
      animation: float-animation 7s ease-in-out infinite 1s;
    }

    @keyframes pulse-badge {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }

    @keyframes float-animation {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(180deg);
      }
    }

    .animate-fade-in {
      animation: fadeInUp 0.8s ease forwards;
    }

    .animate-fade-in-delay {
      animation: fadeInUp 0.8s ease forwards 0.3s;
      opacity: 0;
    }

    .animate-fade-in-delay-2 {
      animation: fadeInUp 0.8s ease forwards 0.6s;
      opacity: 0;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 991px) {
      .hook-section {
        padding: 80px 0;
      }

      .hook-title {
        font-size: 36px;
      }

      .hook-description {
        font-size: 16px;
      }

      .badge-circle {
        width: 220px;
        height: 220px;
      }

      .badge-inner {
        width: 170px;
        height: 170px;
      }

      .discount-text {
        font-size: 56px;
      }

      .off-text {
        font-size: 24px;
      }

      .hook-badge {
        margin-top: 40px;
      }
    }

    @media (max-width: 768px) {
      .hook-section {
        padding: 60px 0;
      }

      .hook-title {
        font-size: 30px;
      }

      .btn-book {
        padding: 14px 35px;
        font-size: 16px;
      }

      .float-icon {
        width: 45px;
        height: 45px;
      }

      .float-icon i {
        font-size: 20px;
      }

      .badge-circle {
        width: 200px;
        height: 200px;
      }

      .badge-inner {
        width: 150px;
        height: 150px;
      }

      .discount-text {
        font-size: 48px;
      }

      .off-text {
        font-size: 20px;
      }
    }
  `]
})
export class HookComponent {}
// about.component.ts
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="about-section py-5" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="about-content">
              <p class="section-label">عن ريفيتال</p>
              <h2 class="section-title">
تلتزم مستشفى ريفيتال بتقديم<br> أعلى مستويات الجودة في الرعاية والعلاج والخدمات للمرضى</h2>
              <div class="title-underline"></div>
              
            <p class="about-description">هدفنا هو تعزيز تعافي المرضى وتحسين نتائجهم من خلال تقديم رعاية شاملة ومتخصصة لكل مريض، وذلك عبر فريق من ذوي الخبرة.
</p>

              <div class="row mt-4">
                <div class="col-md-6">
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>تشمل برامجنا المتكاملة الرعاية عالية الجودة</span>
                  </div>
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>رعاية المرضى على مدار 24 ساعة</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill"></i>
                    <span>خدمات متخصصة من خلال عياداتنا الخارجية</span>
                  </div>
                  <div class="feature-item">
                    <i class="bi bi-check-circle-fill"></i>
                    <!-- Not Found in file -->
                    <span> خدمات المختبرات الطبية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 order-lg-1">
            <div class="about-images-grid">
              <!-- Decorative Pattern -->
              <div class="decorative-pattern">
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
                <div class="pattern-dot"></div>
              </div>

              <!-- Main Large Image -->
              <div class="image-wrapper main-image">
                <img [src]="'assets/lab.jpeg'" 
                     alt="فريق طبي محترف" 
                     class="img-fluid">
                <div class="image-overlay"></div>
              </div>

              <!-- Bottom Right Small Image -->
              <div class="image-wrapper small-image-bottom">
                <img [src]="'assets/doc.png'" 
                     alt="مختبرات متقدمة" 
                     class="img-fluid">
               
              </div>

              <!-- Stats Cards -->
              <div class="stats-floating">
                <div class="stat-card">
                  <div class="stat-icon">
                    <i class="bi bi-people-fill"></i>
                  </div>
                  <div class="stat-content">
                    <h4>15,000+</h4>
                    <p>مريض سنوياً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Features Icons Bottom -->
        <div class="row mt-5 features-bottom">
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <i class="bi bi-hospital-fill"></i>
              </div>
              <h5>مرافق حديثة</h5>
              <p>أحدث التجهيزات الطبية</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <i class="bi bi-heart-pulse-fill"></i>
              </div>
              <h5>رعاية متميزة</h5>
              <p>خدمات صحية عالية الدقة</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="feature-box">
              <div class="feature-icon-wrapper">
                <i class="bi bi-shield-fill-check"></i>
              </div>
              <h5>معايير السلامة</h5>
              <p>التزام تام بمعايير الجودة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Full Width Video Section -->
<section class="about-video-section" id="about-video">
  <video
    #aboutVideo
    class="about-video"
    muted
    loop
    playsinline
    preload="auto"
  >
    <source src="assets/INTRO2.mp4" type="video/mp4" />
  </video>

  <button class="mute-btn" (click)="toggleMute()">
    <i class="bi" [ngClass]="isMuted ? 'bi-volume-mute-fill' : 'bi-volume-up-fill'"></i>
  </button>
</section>


  `,
  styles: [`
    .about-section {
      background-color: #FFFFFF;
      padding: 80px 0;
      direction: rtl;
      font-family: 'Cairo', 'Tajawal', sans-serif;
    }

    .section-label {
      color: #2E7DB5;
      font-weight: 600;
      font-size: 19px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .section-title {
      color: #23334fff;
      font-size: 38px;
      font-weight: 800;
      line-height: 1.4;
      margin-bottom: 20px;
    }

    .title-underline {
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #2E7DB5, #68A8D8);
      margin-bottom: 25px;
    }

    .about-description {
      color: #5A6C7D;
      font-size: 17px;
      line-height: 1.9;
      margin-bottom: 30px;
      text-align: justify;
    }

    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      gap: 12px;
    }

    .feature-item i {
      color: #4CAF50;
      font-size: 22px;
      flex-shrink: 0;
    }

    .feature-item span {
      color: #1A2332;
      font-size: 16px;
      font-weight: 500;
    }

    /* Images Grid */
    .about-images-grid {
      position: relative;
      height: 600px;
      padding: 20px;
    }

    .decorative-pattern {
      position: absolute;
      top: -20px;
      right: -20px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      z-index: 1;
    }

    .pattern-dot {
      width: 12px;
      height: 12px;
      background-color: #68A8D8;
      border-radius: 50%;
      opacity: 0.4;
      animation: pulse-dot 2s ease-in-out infinite;
    }

    .pattern-dot:nth-child(2) { animation-delay: 0.2s; }
    .pattern-dot:nth-child(3) { animation-delay: 0.4s; }
    .pattern-dot:nth-child(4) { animation-delay: 0.6s; }
    .pattern-dot:nth-child(5) { animation-delay: 0.8s; }
    .pattern-dot:nth-child(6) { animation-delay: 1s; }

    @keyframes pulse-dot {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.3); opacity: 0.8; }
    }

    .image-wrapper {
      position: absolute;
      overflow: hidden;
      border-radius: 20px;
      box-shadow: 0 15px 50px rgba(46, 125, 181, 0.2);
    }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .image-wrapper:hover img {
      transform: scale(1.08);
    }

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, rgba(46, 125, 181, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    .image-wrapper:hover .image-overlay {
      opacity: 1;
    }

    .main-image {
      top: 50px;
      right: 0;
      width: 70%;
      height: 450px;
      z-index: 2;
      border: 8px solid #FFFFFF;
    }

    .small-image-bottom {
      bottom: 0;
      left: 0;
      width: 50%;
      height: 280px;
      z-index: 3;
      border: 6px solid #FFFFFF;
    }

    .image-badge {
      position: absolute;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      color: #FFFFFF;
      padding: 12px 20px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 5px 20px rgba(46, 125, 181, 0.4);
      animation: float-badge 3s ease-in-out infinite;
    }

    @keyframes float-badge {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .image-badge i {
      font-size: 20px;
    }

    /* Stats Floating Card */
    .stats-floating {
      position: absolute;
      top: 150px;
      left: -20px;
      z-index: 4;
      animation: float-card 4s ease-in-out infinite;
    }

    @keyframes float-card {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }

    .stat-card {
      background: #FFFFFF;
      padding: 20px 25px;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(46, 125, 181, 0.2);
      display: flex;
      align-items: center;
      gap: 15px;
      min-width: 200px;
    }

    .stat-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .stat-icon i {
      font-size: 28px;
      color: #FFFFFF;
    }

    .stat-content h4 {
      color: #2E7DB5;
      font-size: 26px;
      font-weight: 800;
      margin: 0;
      line-height: 1;
    }

    .stat-content p {
      color: #5A6C7D;
      font-size: 13px;
      margin: 5px 0 0 0;
      line-height: 1;
    }

    /* Features Bottom */
    .features-bottom {
      margin-top: 80px;
      padding-top: 50px;
      border-top: 2px solid #E8F3F9;
    }

    .feature-box {
      text-align: center;
      padding: 30px 20px;
      transition: all 0.3s ease;
      border-radius: 15px;
    }

    .feature-box:hover {
      background-color: #F5F8FA;
      transform: translateY(-5px);
    }

    .feature-icon-wrapper {
      width: 90px;
      height: 90px;
      background: linear-gradient(135deg, #E8F3F9, #FFFFFF);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      box-shadow: 0 5px 20px rgba(46, 125, 181, 0.1);
      transition: all 0.3s ease;
    }

    .feature-box:hover .feature-icon-wrapper {
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      box-shadow: 0 10px 30px rgba(46, 125, 181, 0.3);
      transform: rotate(360deg);
    }

    .feature-icon-wrapper i {
      font-size: 40px;
      color: #2E7DB5;
      transition: color 0.3s ease;
    }

    .feature-box:hover .feature-icon-wrapper i {
      color: #FFFFFF;
    }

    .feature-box h5 {
      color: #1A2332;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    .feature-box p {
      color: #5A6C7D;
      font-size: 15px;
      margin: 0;
    }

    @media (max-width: 991px) {
      .section-title {
        font-size: 36px;
      }

      .about-images-grid {
        height: 500px;
        margin-bottom: 40px;
      }

      .main-image {
        width: 75%;
        height: 380px;
      }

      .small-image-bottom {
        width: 55%;
        height: 240px;
      }

      .stats-floating {
        top: 120px;
        left: -10px;
      }
    }

    @media (max-width: 768px) {
      .about-section {
        padding: 60px 0;
      }

      .section-title {
        font-size: 30px;
      }

      .about-description {
        font-size: 16px;
      }

      .about-images-grid {
        height: 450px;
      }

      .main-image {
        width: 80%;
        height: 320px;
      }

      .small-image-bottom {
        width: 60%;
        height: 200px;
      }

      .stats-floating {
        position: static;
        margin-top: 20px;
        animation: none;
      }

      .stat-card {
        justify-content: center;
      }

      .decorative-pattern {
        display: none;
      }
    }
    /* Full Width Video */
.about-video-section {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

.about-video {
  width: 100%;
  height: auto;          /* مهم */
  max-height:115vh;     /* يمنع التمدد المبالغ فيه */
  object-fit: cover;  /* بدل cover */
  display: block;
}
.mute-btn {
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.mute-btn:hover {
  background: rgba(0, 0, 0, 0.85);
  transform: scale(1.1);
}


  `]
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('aboutVideo') aboutVideo!: ElementRef<HTMLVideoElement>;
  isMuted = true;

  ngAfterViewInit(): void {
    const video = this.aboutVideo.nativeElement;

    video.muted = true;
    video.load();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(err => console.log('Autoplay blocked', err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);
  }

  toggleMute() {
  const video = this.aboutVideo.nativeElement;

  this.isMuted = !this.isMuted;
  video.muted = this.isMuted;

  if (!this.isMuted) {
    video.volume = 1;
    video.play(); // مهم جدًا
  }
}

}
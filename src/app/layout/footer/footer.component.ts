// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEPARTMENTS_DATA } from '../../core/models/services.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-main">
        <div class="container">
          <div class="row g-4">
            <!-- About Section -->
            <div class="col-lg-4 col-md-6">
              <div class="footer-section">
                <div class="footer-logo">
                  <img src="logo.png" alt="مستشفى ريفيتال" class="logo-img">
                  <!-- <h3>مستشفى ريفيتال</h3> -->
                </div>
                <div class="social-links">
                  <a href="https://www.facebook.com/revital.ae/" class="social-icon" aria-label="فيسبوك">
                    <i class="bi bi-facebook"></i>
                  </a>
                
                  <a href="https://www.linkedin.com/company/revital-rehabilitation-hospital/" class="social-icon" aria-label="لينكد إن">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com/revital.hospital/" class="social-icon" aria-label="إنستغرام">
                    <i class="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="col-lg-2 col-md-6">
              <div class="footer-section">
                <h4 class="footer-title">روابط سريعة</h4>
                <ul class="footer-links">
                  <li><a [routerLink]="'about'">عن المستشفى</a></li>
                  <li><a [routerLink]="'services'">خدماتنا</a></li>
                  <li><a href="#departments">الأقسام الطبية</a></li>
                  <li><a href="#team">فريقنا الطبي</a></li>
            
                </ul>
              </div>
            </div>

           <!-- Our Services -->
<div class="col-lg-3 col-md-6">
  <div class="footer-section">
    <h4 class="footer-title">خدماتنا الطبية</h4>
    <ul class="footer-links">
      <li *ngFor="let dept of featuredDepartments">
        <a [routerLink]="['/services', dept?.id]">{{ dept?.nameAr }}</a>
      </li>
    </ul>
  </div>
</div>

            <!-- Contact Us -->
            <div class="col-lg-3 col-md-6">
              <div class="footer-section">
                <h4 class="footer-title">تواصل معنا</h4>
                <ul class="contact-info">
                  <li class="contact-item">
                    <i class="bi bi-geo-alt-fill"></i>
                    <div>
                      <strong>العنوان:</strong>
                      <p>  الفوعة ، العين ، أبو ظبي<br>الإمارات العربية المتحدة</p>
                    </div>
                  </li>
                  <li class="contact-item">
                    <i class="bi bi-envelope-fill"></i>
                    <div>
                      <strong>البريد الإلكتروني:</strong>
                      <p><a href="mailto:info@staging.revitalrehab.ae">info@staging.revitalrehab.ae</a></p>
                    </div>
                  </li>
                  <li class="contact-item">
                    <i class="bi bi-telephone-fill"></i>
                    <div>
                      <strong>الهاتف:</strong>
                      <p><a href="tel:+97137144444" dir="ltr">+9713 7144 444</a></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
           
             <p class="copyright">
                © 2025 مستشفى ريفيتال. جميع الحقوق محفوظة
              </p>
            <!-- <div class="col-md-6">
              <ul class="footer-bottom-links">
                <li><a href="#terms">شروط الخدمة</a></li>
                <li><a href="#privacy">سياسة الخصوصية</a></li>
                <li><a href="#cookies">سياسة الكوكيز</a></li>
                <li><a href="#sitemap">خريطة الموقع</a></li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #FFFFFF;
      direction: rtl;
      font-family: 'Cairo', 'Tajawal', sans-serif;
    }

    .footer-main {
      padding: 80px 0 40px;
      border-top: 3px solid #E8F3F9;
    }

    .footer-section {
      margin-bottom: 30px;
    }

    /* Logo Section */
    .footer-logo {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .logo-img {
      width: 250px;
      height: 250px;
      object-fit: contain;
    }

    .footer-logo h3 {
      color: #2E7DB5;
      font-size: 24px;
      font-weight: 800;
      margin: 0;
    }

    .footer-description {
      color: #5A6C7D;
      font-size: 15px;
      line-height: 1.7;
      margin-bottom: 25px;
    }

    /* Social Links */
    .social-links {
      display: flex;
      gap: 12px;
    }

    .social-icon {
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, #E8F3F9, #F5F8FA);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #2E7DB5;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .social-icon:hover {
      background: linear-gradient(135deg, #2E7DB5, #68A8D8);
      color: #FFFFFF;
      transform: translateY(-5px);
      border-color: #68A8D8;
      box-shadow: 0 5px 15px rgba(46, 125, 181, 0.3);
    }

    .social-icon i {
      font-size: 18px;
    }

    /* Footer Titles */
    .footer-title {
      color: #1A2332;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 25px;
      position: relative;
      padding-bottom: 12px;
    }

    .footer-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #2E7DB5, #68A8D8);
      border-radius: 2px;
    }

    /* Footer Links */
    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      color: #5A6C7D;
      text-decoration: none;
      font-size: 15px;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .footer-links a::before {
      content: '◄';
      color: #2E7DB5;
      font-size: 12px;
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
    }

    .footer-links a:hover {
      color: #2E7DB5;
      padding-right: 10px;
    }

    .footer-links a:hover::before {
      opacity: 1;
      transform: translateX(0);
    }

    /* Contact Info */
    .contact-info {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .contact-item {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
      align-items: flex-start;
    }

    .contact-item i {
      color: #2E7DB5;
      font-size: 22px;
      flex-shrink: 0;
      margin-top: 3px;
      width: 30px;
      height: 30px;
      background: #E8F3F9;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    .contact-item strong {
      color: #1A2332;
      font-size: 15px;
      display: block;
      margin-bottom: 5px;
    }

    .contact-item p {
      color: #5A6C7D;
      font-size: 14px;
      margin: 0;
      line-height: 1.6;
    }

    .contact-item a {
      color: #5A6C7D;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-item a:hover {
      color: #2E7DB5;
    }

    /* Footer Bottom */
    .footer-bottom {
      background: linear-gradient(135deg, #F5F8FA, #E8F3F9);
      padding: 25px 0;
      border-top: 1px solid #E1E8ED;
    }

    .copyright {
      color: #5A6C7D;
      font-size: 14px;
      margin: 0;
    }

    .footer-bottom-links {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: flex-start;
      gap: 25px;
      flex-wrap: wrap;
    }

    .footer-bottom-links li {
      position: relative;
    }

    .footer-bottom-links li:not(:last-child)::after {
      content: '|';
      position: absolute;
      left: -13px;
      color: #CBD6E2;
    }

    .footer-bottom-links a {
      color: #5A6C7D;
      text-decoration: none;
      font-size: 14px;
      transition: color 0.3s ease;
    }

    .footer-bottom-links a:hover {
      color: #2E7DB5;
    }

    /* Responsive */
    @media (max-width: 991px) {
      .footer-main {
        padding: 60px 0 30px;
      }

      .footer-title {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 767px) {
      .footer-main {
        padding: 40px 0 20px;
      }

      .footer-logo h3 {
        font-size: 20px;
      }

      .footer-description {
        font-size: 14px;
      }

      .copyright {
        text-align: center;
        margin-bottom: 15px;
      }

      .footer-bottom-links {
        justify-content: center;
        font-size: 13px;
      }

      .footer-bottom {
        padding: 20px 0;
      }

      .social-links {
        justify-content: flex-start;
      }
    }

    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .footer-section {
      animation: fadeInUp 0.6s ease forwards;
    }

    .footer-section:nth-child(1) { animation-delay: 0.1s; }
    .footer-section:nth-child(2) { animation-delay: 0.2s; }
    .footer-section:nth-child(3) { animation-delay: 0.3s; }
    .footer-section:nth-child(4) { animation-delay: 0.4s; }
  `]
})
export class FooterComponent {
  featuredDepartments = [
    DEPARTMENTS_DATA.find(d => d.id === 'dental'),          // طب الأسنان
    DEPARTMENTS_DATA.find(d => d.id === 'family-medicine'), // طب الأسرة
    DEPARTMENTS_DATA.find(d => d.id === 'pediatrics'),      // طب الأطفال
    DEPARTMENTS_DATA.find(d => d.id === 'therapy-services') // العلاج التأهيلي
  ].filter(Boolean);
}
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}
@Component({
  selector: 'app-heroSection',
  imports: [CommonModule],
  templateUrl: './heroSection.component.html',
  styleUrls: ['./heroSection.component.css']
})
export class HeroSectionComponent implements OnInit,OnDestroy  {

  constructor() { }


 currentSlideIndex = 0;
  autoPlayInterval: any;
  isTransitioning = false;

  slides: Slide[] = [
    {
      image: 'assets/R4.webp',
      title: 'مرحباً بكم في مستشفى ريفيتال',
      subtitle: '   لمسة من الرعاية التي تستحقها',
description: 'يعمل فريقنا الطبي باحترافية عالية لتقديم رعاية صحية شاملة تضع المريض في المقام الأول',
 buttonText: 'احجز موعدك',
      buttonLink: '/contact'
    },
    {
      image: 'assets/cover1.png',
      title: 'رعاية صحية متكاملة',
      subtitle: 'أحدث التقنيات الطبية',
      description: 'نقدم خدمات طبية شاملة بأحدث التقنيات والأجهزة الطبية المتطورة لضمان أفضل رعاية صحية لك ولعائلتك',
      buttonText: 'تعرف على خدماتنا',
      buttonLink: '/#services'
    },
    {
      image: 'assets/DSC00829-withaccr.webp',
      title: 'فريق طبي متميز',
subtitle: 'فريق طبي متخصص ومحترف',
description: 'يضم المستشفى فريقًا طبيًا مؤهلاً يعمل وفق أفضل الممارسات الطبية وبنهج إنساني',
      buttonText: 'تعرف على أطبائنا',
      buttonLink: '/#team'
    },
    {
      image: 'assets/revital.webp',
     title: 'رعاية طبية مستمرة',
subtitle: 'جاهزون لخدمتكم',
description: 'نحرص على توفير رعاية طبية موثوقة وسريعة وفق أعلى معايير الجودة والسلامة',
 buttonText: 'اتصل بنا الآن',
      buttonLink: '/contact'
    }
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide(): void {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 5000);
  }

  previousSlide(): void {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.slides.length - 1 
      : this.currentSlideIndex - 1;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);
  }

  goToSlide(index: number): void {
    if (this.isTransitioning || index === this.currentSlideIndex) return;
    
    this.isTransitioning = true;
    this.currentSlideIndex = index;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800);
    
    // Reset auto play
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  get currentSlide(): Slide {
    return this.slides[this.currentSlideIndex];
  }
}

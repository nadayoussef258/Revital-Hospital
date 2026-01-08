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
  imports:[CommonModule],
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
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80',
      title: 'مرحباً بكم في مستشفى ريفيتال',
      subtitle: 'أفضل الخدمات الطبية التي تستحقها',
      description: 'أطباؤنا المتخصصون متعاطفون ومحترفون للغاية في التعامل مع صحتك. لديهم خبرة كبيرة في المجال الطبي',
      buttonText: 'احجز موعدك',
      buttonLink: '/appointment'
    },
    {
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80',
      title: 'رعاية صحية متكاملة',
      subtitle: 'أحدث التقنيات الطبية في الإمارات',
      description: 'نقدم خدمات طبية شاملة بأحدث التقنيات والأجهزة الطبية المتطورة لضمان أفضل رعاية صحية لك ولعائلتك',
      buttonText: 'تعرف على خدماتنا',
      buttonLink: '/services'
    },
    {
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&q=80',
      title: 'فريق طبي متميز',
      subtitle: 'خبراء في جميع التخصصات الطبية',
      description: 'نفخر بفريقنا الطبي المؤهل من أفضل الأطباء والاستشاريين في مختلف التخصصات الطبية',
      buttonText: 'تعرف على أطبائنا',
      buttonLink: '/doctors'
    },
    {
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1920&q=80',
      title: 'خدمة طوارئ 24/7',
      subtitle: 'نحن في خدمتك على مدار الساعة',
      description: 'قسم طوارئ مجهز بالكامل ومتاح على مدار الساعة طوال أيام الأسبوع للتعامل مع جميع الحالات الطارئة',
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

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navBar',
  imports: [CommonModule],
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.updateActiveMenuItem();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveMenuItem();
      }
    });
  }
isMenuOpen = false;

  menuItems = [
    { label: 'الرئيسية', route: '/', active: true },
    { label: 'من نحن', route: '/about', active: false },
    { 
      label: 'الخدمات', 
      route: '/#services', 
      active: false,

    },
    { 
      label: 'الأقسام', 
      route: '/#departments', 
      active: false,

    },
    { label: 'الأطباء', route: '/#team', active: false },
    { label: 'اتصل بنا', route: '/contact', active: false }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  scrollToElement(elementId: string) {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  handleNavClick(item: any) {
    if (item.route.includes('#')) {
      const elementId = item.route.split('#')[1];
      this.scrollToElement(elementId);
    }
    this.closeMenu();
  }

  updateActiveMenuItem() {
    const currentUrl = this.router.url.split('#')[0];
    
    this.menuItems.forEach(item => {
      // للروابط التي فيها # (scroll links) - لا تصير active إلا عند الضغط عليها مباشرة
      if (item.route.includes('#')) {
        item.active = false;
      } else {
        // للروابط العادية - تصير active إذا match الـ current URL
        const itemRoute = item.route.split('#')[0];
        item.active = currentUrl === itemRoute;
      }
    });
  }
}

import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./layout/topBar/topBar.component";
import { NavBarComponent } from "./layout/navBar/navBar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent, NavBarComponent, FooterComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('revital');
    currentYear = new Date().getFullYear();
 
  showPublicLayout = true;
 
  constructor(private router: Router) {
    // مراقبة تغيير المسار لإخفاء/إظهار الـ layout
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.showPublicLayout = !event.url.includes('/admin');
    });
  }
}

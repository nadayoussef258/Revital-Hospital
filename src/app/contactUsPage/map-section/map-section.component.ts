// map-section.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeUrlPipe } from "../../Pipes/sanitize-url.pipe";

@Component({
  selector: 'app-map-section',
  standalone: true,
  imports: [CommonModule, SanitizeUrlPipe],
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.css']
})
export class MapSectionComponent {
  mapUrl ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.7326150074487!2d55.801462400000005!3d24.3319381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef54b682fdb7e2b%3A0x6afd2508aa5021ae!2z2YXYs9iq2LTZgdmJINix2YrZgdmK2KrYp9mEINmE2YTYqtij2YfZitmE!5e1!3m2!1sar!2seg!4v1767881589825!5m2!1sar!2seg';
  
  address = {
    title: 'العنوان التفصيلي:',
    line1: 'مستشفى ريفيتال، شارع الشيخ زايد، بالقرب من برج خليفة',
    line2: 'دبي، الإمارات العربية المتحدة'
  };
}



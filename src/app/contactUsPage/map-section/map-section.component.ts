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
  mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0937742315825!2d55.27136931501659!3d25.096533983940195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sSheikh%20Zayed%20Road%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae';
  
  address = {
    title: 'العنوان التفصيلي:',
    line1: 'مستشفى ريفيتال، شارع الشيخ زايد، بالقرب من برج خليفة',
    line2: 'دبي، الإمارات العربية المتحدة'
  };
}



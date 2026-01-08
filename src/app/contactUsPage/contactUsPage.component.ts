import { Component, OnInit } from '@angular/core';
import { ContactCardsComponent } from "./contact-cards/contact-cards.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { MapSectionComponent } from "./map-section/map-section.component";
import { ContactHeroSectionComponent } from "./contactHeroSection/contactHeroSection.component";

@Component({
  selector: 'app-aboutUsPage',
  templateUrl: './contactUsPage.component.html',
  styleUrls: ['./contactUsPage.component.css'],
  imports: [ContactCardsComponent, ContactFormComponent, MapSectionComponent, ContactHeroSectionComponent]
})
export class ContactUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

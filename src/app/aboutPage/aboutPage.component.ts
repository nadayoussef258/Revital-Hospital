import { Component, OnInit } from '@angular/core';
import { AboutHeroSectionComponent } from "./aboutHeroSection/aboutHeroSection.component";
import { WhoWeAreComponent } from "./who-we-are/who-we-are.component";
import { VisionMissionComponent } from "./vision-mission/vision-mission.component";
import { WhyChooseUsComponent } from "./why-choose-us/why-choose-us.component";

@Component({
  selector: 'app-aboutPage',
  templateUrl: './aboutPage.component.html',
  styleUrls: ['./aboutPage.component.css'],
  imports: [AboutHeroSectionComponent, WhoWeAreComponent, VisionMissionComponent, WhyChooseUsComponent]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

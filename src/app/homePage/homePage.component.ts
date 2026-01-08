import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "./heroSection/heroSection.component";
import { AboutComponent } from "./about/about.component";
import { HookComponent } from "./hook/hook.component";
import { ServicesComponent } from "./services/services.component";
import { DepartmentsComponent } from "./departments/departments.component";
import { TeamComponent } from "./team/team.component";

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css'],
  imports: [HeroSectionComponent, AboutComponent, HookComponent, ServicesComponent, DepartmentsComponent, TeamComponent]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { EventsHeroComponent } from "./events-hero/events-hero.component";
import { EventsListComponent } from "./events-list/events-list.component";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  imports: [EventsHeroComponent, EventsListComponent]
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

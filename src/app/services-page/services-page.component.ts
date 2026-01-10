import { Component, OnInit } from '@angular/core';
import { Department, DEPARTMENTS_DATA } from '../core/models/services.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-page',
  imports: [CommonModule],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent  {

  departments: Department[] = DEPARTMENTS_DATA;

  constructor(private router: Router) {}

  navigateToDepartment(departmentId: string): void {
    this.router.navigate(['/services', departmentId]);
  }
}

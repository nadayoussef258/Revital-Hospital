import { Component, OnInit } from '@angular/core';
import { Department, DEPARTMENTS_DATA } from '../core/models/services.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-detail',
  imports: [CommonModule],
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  department: Department | undefined;
  relatedDepartments: Department[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadDepartment(id);
    });
  }

  private loadDepartment(id: string): void {
    this.department = DEPARTMENTS_DATA.find(d => d.id === id);
    
    if (!this.department) {
      this.router.navigate(['/services']);
      return;
    }

    // Get 3 random related departments
    this.relatedDepartments = DEPARTMENTS_DATA
      .filter(d => d.id !== id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }

  navigateToDepartment(departmentId: string): void {
    this.router.navigate(['/services', departmentId]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.router.navigate(['/services']);
  }
}
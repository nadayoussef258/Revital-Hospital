import { Component, OnInit } from '@angular/core';
import { Department, DEPARTMENTS_DATA } from '../core/models/services.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department-detail',
  imports:[CommonModule],
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
department: Department | undefined;
  relatedDepartments: Department[] = [];

  // Medical service images from Unsplash
  private serviceImages: string[] = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
    'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800',
    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800',
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800'
  ];

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

  getServiceImage(index: number): string {
    return this.serviceImages[index % this.serviceImages.length];
  }

  navigateToDepartment(departmentId: string): void {
    this.router.navigate(['/services', departmentId]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.router.navigate(['/services']);
  }
}

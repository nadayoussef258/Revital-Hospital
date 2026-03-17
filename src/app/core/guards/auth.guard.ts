// src/app/guards/auth.guard.ts - FIXED
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';
import { filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      // انتظر حتى يتم التحقق من حالة المصادقة
      // استخدم timeout عشان ما نستناش للأبد
      const user = await Promise.race([
        firstValueFrom(
          this.authService.currentUser.pipe(
            filter(user => user !== undefined), // انتظر حتى يكون فيه قيمة (null أو user)
            take(1)
          )
        ),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Auth timeout')), 3000)
        )
      ]);

      if (user) {
        return true;
      }

      // Not logged in, redirect to login page
      this.router.navigate(['/admin/login'], { 
        queryParams: { returnUrl: state.url } 
      });
      return false;
    } catch (error) {
      console.error('Auth check error:', error);
      this.router.navigate(['/admin/login'], { 
        queryParams: { returnUrl: state.url } 
      });
      return false;
    }
  }
}
// src/app/services/auth.service.ts - FIXED
import { Injectable } from '@angular/core';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { auth } from '../../../../firebase.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null | undefined>;
  public currentUser: Observable<User | null | undefined>;
  private authInitialized = false;

  constructor() {
    // ابدأ بـ undefined عشان نعرف إن الـ auth لسه مش initialized
    this.currentUserSubject = new BehaviorSubject<User | null | undefined>(undefined);
    this.currentUser = this.currentUserSubject.asObservable();

    // استمع لتغييرات حالة المصادقة
    onAuthStateChanged(auth, (user) => {
      this.currentUserSubject.next(user);
      this.authInitialized = true;
    });
  }

  // Get current user value
  public get currentUserValue(): User | null | undefined {
    return this.currentUserSubject.value;
  }

  // Check if auth is initialized
  public get isAuthInitialized(): boolean {
    return this.authInitialized;
  }

  // Login
  async login(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(this.getErrorMessage(error.code));
    }
  }

  // Logout
  async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    const user = this.currentUserValue;
    return user !== null && user !== undefined;
  }

  // Get error message in Arabic
  private getErrorMessage(errorCode: string): string {
    const errorMessages: { [key: string]: string } = {
      'auth/invalid-email': 'البريد الإلكتروني غير صحيح',
      'auth/user-disabled': 'هذا الحساب معطل',
      'auth/user-not-found': 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      'auth/wrong-password': 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      'auth/invalid-credential': 'بيانات الدخول غير صحيحة',
      'auth/too-many-requests': 'محاولات تسجيل دخول كثيرة. حاول مرة أخرى لاحقاً',
    };
    return errorMessages[errorCode] || 'حدث خطأ أثناء تسجيل الدخول';
  }
}
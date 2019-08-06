import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  sessionStatus: boolean;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // this.authService.isUserSessionFound().subscribe(
    //   (user) => {
    //     if (!user) {
    //       this.sessionStatus = false;
    //     }
    //     else {
    //       this.sessionStatus = true;
    //     }
    //   }
    // )
    // if (this.sessionStatus) {
    //   this.router.navigate(['/user-profile']);  
    //   return true;    
    // }
    // else {
    //   this.router.navigate(['/user-auth']);
    //   return false;
    // }
    if (this.authService.currentUser()) {
      return true;
    }
    else {
      return this.router.navigate(['/user-auth']);
    }      
  }
}

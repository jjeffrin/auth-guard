import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {  
  loading: boolean = false;
  emailLogin: string;
  passwordLogin: string;
  emailReg: string;
  passwordReg: string;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.authService.isUserSessionFound().subscribe(
      (user) => {
        if (user) {
          this.router.navigate(['/user-profile']);
        }
      }
    );
  }

  signIn() {     
    this.loading = true;  
    this.authService.signIn(this.emailLogin, this.passwordLogin).then(
      () => {
        this.router.navigate(['/user-profile']);
      }
    ).catch(
      () => {
        this.loading = false;
      }
    )     
  }

  signUp() {
    this.loading = true;
    this.authService.signUp(this.emailReg, this.passwordReg).then(
      () => {
        this.router.navigate(['/user-profile']);
      }
    ).catch(
      () => {
        this.loading = false;
      }
    )
  }

  signInWithGoogle() {
    this.authService.google().then(
      () => {
        this.router.navigate(['/user-profile']);
      }
    ).catch(
      () => {
        console.log("failed");
      }
    )
  }
}

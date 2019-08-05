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

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    console.log(this.loading);
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

}

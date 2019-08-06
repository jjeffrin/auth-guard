import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  session: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkSession();
  }

  logout() {
    this.authService.signOut();
    this.checkSession();
    this.router.navigate(['/user-auth']);
  }

  checkSession() {
    this.authService.isUserSessionFound().subscribe((user) => {
      if (user) {
        this.session = true;
      }
      else {
        this.session = false;
      }
      console.log(this.session);
    });  
  }

}

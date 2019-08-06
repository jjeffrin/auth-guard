import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  email: string;
  dark: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.email = this.authService.currentUser().email;
  }

  toggleTheme() {
    this.dark = !this.dark;
  }

}

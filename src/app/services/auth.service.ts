import { Injectable } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/auth';
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userFound: boolean;

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }

  isUserSessionFound() {
    return this.firebaseAuth.authState;
  }

  signIn(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.firebaseAuth.auth.signOut();
  }
}

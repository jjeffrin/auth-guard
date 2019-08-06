import { Injectable } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/auth';
import { auth } from 'firebase';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userFound: boolean;

  constructor(
    private firebaseAuth: AngularFireAuth
  ) { }

  currentUser() {
    return this.firebaseAuth.auth.currentUser;
  }

  isUserSessionFound() {
    return this.firebaseAuth.authState;
  }

  signIn(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.firebaseAuth.auth.signOut();
  }

  signUp(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  google() {
    return this.firebaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}

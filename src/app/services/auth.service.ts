import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<firebase.User | null>(null);
  public user$: Observable<firebase.User | null> = this.currentUserSubject.asObservable();

  constructor(private afAuth: AngularFireAuth) {
    // Vinculamos el estado de authState de compat
    this.afAuth.authState.subscribe(user => {
      this.currentUserSubject.next(user);
    });
  }

  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getCurrentUser(): Promise<firebase.User | null> {
    return this.afAuth.currentUser;
  }
}

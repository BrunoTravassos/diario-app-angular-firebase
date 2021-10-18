import { EventEmitter, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseError } from '@firebase/util';
import { LoginData } from '../login/login-data';
import { SignupData } from '../signup/signup-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.auth.authState.subscribe((user) => {
      this.userData = user;
    })
  }

  userData: any;
  errorEmitter = new EventEmitter<string>();

  get user() {
    return this.auth.user;
  }
/**
 *criando usuario
 * @param param0
 */
  signUp({ email, password, birthdate, fullname }: SignupData) {
    this.auth.createUserWithEmailAndPassword(email, password).then((creds) => {
      this.sendEmailVerification(creds.user);
      creds.user?.updateProfile({ displayName: fullname });
      this.db
        .collection('user')
        .doc(creds.user?.uid)
        .set({ birthdate, fullname });
    }), (err: FirebaseError) => {
      this.errorEmitter.emit(err.code);
    }
  }
/**
 *login do user no banco
 * @param param0
 */
  login({ email, password }: LoginData) {
    this.auth.signInWithEmailAndPassword(email, password).then((creds) => {
      this.sendEmailVerification(creds.user)
    },
       (err: FirebaseError) => {
        this.errorEmitter.emit(err.code);
      }
    );
  }

  logout() {
    this.auth.signOut();
  }

  sendEmailVerification(user: any) {
    if (!user?.emailVerified) {
      user?.sendEmailVerification()
    }
  }
}

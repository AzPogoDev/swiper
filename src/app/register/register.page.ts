import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(public ngFireAuth: AngularFireAuth, public router: Router) {}

  ngOnInit() {}

  // Sign up with email/password
  signup(email, password: string) {
    return this.ngFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
          up and returns promise */
        this.router.navigate(['profile']);
        console.log('signe up');
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}

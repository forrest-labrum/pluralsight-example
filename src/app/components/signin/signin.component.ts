import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  userData: any = {};
  validLogin: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  signIn() {
    this.authService.signIn(this.userData.email, this.userData.password)
      .subscribe(data => {
        if(data.token) {
          this.router.navigateByUrl('/')
        } else {
          this.validLogin = false;
        }
      }, err => console.log(err));
  }

}

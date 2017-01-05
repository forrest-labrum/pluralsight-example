import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userData: Object = {};

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.userService.create(new User(this.userData))
      .subscribe(res => this.router.navigateByUrl('/signin'), err => console.log(err));
  }

}

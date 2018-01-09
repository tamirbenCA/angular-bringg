import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService }  from '../user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User

  constructor(private userService: UserService) { }

  save(): void {
    console.log('user to save:', this.user)
    // this.userService.addUser({ name } as User)
      // .subscribe(user => {
        // this.users.push(user);
      // });
  }

  ngOnInit() {
    this.getEmptyUser
  }

  getEmptyUser(): void {
    this.user = { name: '', id: '', email: '' }
  }

}

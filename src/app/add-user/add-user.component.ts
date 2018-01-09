import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { User } from '../user';
import { UserService }  from '../user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User

  constructor(private userService: UserService,
              private location: Location,
              private router: Router) { }

  save(): void {
    this.user.name = this.capitalizeName(this.user.name)
    this.userService.addUser(this.user as User)
      .subscribe(user => {
        this.router.navigate([`/`])
        // this.users.push(user);
      });
  }

  capitalizeName(str): string {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => {
        return word[0].toUpperCase() + word.substr(1)
      })
      .join(' ');
  }

  ngOnInit(): void {
    this.setEmptyUser();
  }

  setEmptyUser(): void {
    console.log('create user')
    this.user = { 
                  id: '', // enter an id coz it's not real DB so i cannot generate valid unique id
                  isActive: Math.random() >= 0.5,
                  picture: 'http://placehold.it/32x32',
                  age: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
                  name: '',
                  email: '',
                  latitude: Math.random() * (90 + 90) - 90,
                  longitude: Math.random() * (180 + 180) - 180
                }
  }

  goBack(): void {
    this.location.back();
  }

}

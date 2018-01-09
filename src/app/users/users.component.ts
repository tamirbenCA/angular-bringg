import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
 
import { User } from '../user';
import { UserService } from '../user.service';

import { SORTERS } from '../homepage/homepage.component'
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: Array<User>;
  @Output() onDelete = new EventEmitter<User>();
  @Output() setSorter = new EventEmitter<string>();
  
  constructor(private userService: UserService,
              private router: Router) { }
 
  ngOnInit() {
  }
 
  addUser(): void {
    console.log('adding a user')
    this.router.navigate([`/adduser`])
  }
 
  delete(user: User): void {
    this.onDelete.emit(user)
    // this.users = this.users.filter(h => h !== user);
    // this.userService.deleteUser(user).subscribe();
  }

  sortByAge(): void {
    this.setSorter.emit(SORTERS.AGE)
    // this.users = this.users.sort((a, b) => {
      // console.log('a', a.age)
      // console.log('b', b.age)
      // return a.age - b.age })
    }

  sortByName(): void {
    this.setSorter.emit(SORTERS.NAME)
    // this.users = this.users.sort((a, b) => {
    //   if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    //   if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    //   return 0;
    // })
  }
}
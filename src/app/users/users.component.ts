import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
import { User } from '../user';
import { UserService } from '../user.service';

import { FILTERS } from '../app.component'
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() users: Array<User>;
  @Output() onDelete = new EventEmitter<User>();
  @Output() setFilter = new EventEmitter<string>();
  
  constructor(private userService: UserService) { }
 
  ngOnInit() {
  }
 
  addUser(): void {
    console.log('adding a user')
    // this.userService.addUser({ name } as User)
      // .subscribe(user => {
        // this.users.push(user);
      // });
  }
 
  delete(user: User): void {
    this.onDelete.emit(user)
    // this.users = this.users.filter(h => h !== user);
    // this.userService.deleteUser(user).subscribe();
  }

  sortByAge(): void {
    this.setFilter.emit(FILTERS.AGE)
    // this.users = this.users.sort((a, b) => {
      // console.log('a', a.age)
      // console.log('b', b.age)
      // return a.age - b.age })
    }

  sortByName(): void {
    this.setFilter.emit(FILTERS.NAME)
    // this.users = this.users.sort((a, b) => {
    //   if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
    //   if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
    //   return 0;
    // })
  }
}
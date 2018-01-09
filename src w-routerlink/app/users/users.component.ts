import { Component, OnInit } from '@angular/core';
 
import { User } from '../user';
import { UserService } from '../user.service';
 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.getUsers();
  }
 
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
 
  addUser(): void {
    console.log('adding a user')
    // this.userService.addUser({ name } as User)
      // .subscribe(user => {
        // this.users.push(user);
      // });
  }
 
  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user).subscribe();
  }

  sortByAge(): void {
    this.users = this.users.sort((a, b) => {
      console.log('a', a.age)
      console.log('b', b.age)
      return a.age - b.age })
    }

  sortByName(): void {
    this.users = this.users.sort((a, b) => {
      if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
      if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
      return 0;
    })
  }
}
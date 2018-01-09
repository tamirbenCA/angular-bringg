import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Location } from '../location';
import { getLocaleCurrencyName } from '@angular/common/src/i18n/locale_data_api';

export const SORTERS = {
  NAME: 'name',
  AGE: 'age'
} 

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users: User[];
  locations: Location[];
  sortBy: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  sorters = {
    [SORTERS.NAME]: (a, b) => {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    },
    [SORTERS.AGE]: (a, b) => a.age - b.age
  }

  get usersForDisplay() {
    if (!this.users) return;
    if (!this.sortBy) return this.users;
    var sortBy = this.sorters[this.sortBy]

    return this.users.sort(sortBy)
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.setLocations();
    })
  }
  
  onDelete(user: User): void {
    console.log(user)
    this.userService.deleteUser(user)
    .subscribe(_ => {
      this.users = this.users.filter(h => h !== user)
      this.locations = this.locations.filter(h => h.id !== user.id)
    });
  }

  setSorter(sorter: string): void {
    this.sortBy = sorter;
  }

  setLocations(): void {
    this.locations = this.usersForDisplay.map(location => {
      return {lat: +location.latitude, lng: +location.longitude, isActive: location.isActive, id: location.id}
      })
  };

}

import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Location } from './location';
import { getLocaleCurrencyName } from '@angular/common/src/i18n/locale_data_api';

export const FILTERS = {
  NAME: 'name',
  AGE: 'age'
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Bringg Proj';
  users: User[];
  locations: Location[];
  filterBy

  constructor(private userService: UserService) { }

  filters = {
    [FILTERS.NAME]: (a, b) => {
      if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
      if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
      return 0;
    },
    [FILTERS.AGE]: (a, b) => a.age - b.age
  }

  get usersForDisplay() {
    if (!this.users) return;
    if (!this.filterBy) return this.users;
    var sortBy = this.filters[this.filterBy]

    return this.users.sort(sortBy)
  }

  ngOnInit() {
    this.getUsers()
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

  setFilter(filter: string): void {
    this.filterBy = filter;
  }

  setLocations(): void {
    this.locations = this.usersForDisplay.map(location => {
      return {lat: +location.latitude, lng: +location.longitude, isActive: location.isActive, id: location.id}
      })
  };
}
import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Location } from './location';
import { getLocaleCurrencyName } from '@angular/common/src/i18n/locale_data_api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular Bringg Proj';
  users: User[];
  locations: Location[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users;
      this.getLocations();
    })
  }
  
  onDelete(user: User): void {
    console.log(user)
    this.userService.deleteUser(user)
    .subscribe(_ => {
      this.users = this.users.filter(h => h !== user)
      this.locations = this.locations.filter(h => h.id !== user.id)
      // this.getLocations()
    });
  }

  getLocations(): void {
    this.locations = this.users.map(location => {
      return {lat: +location.latitude, lng: +location.longitude, isActive: location.isActive, id: location.id}
      })
  };
}

import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { UserService } from '../user.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 32.106748;
  lng: number = 34.8336526;
  locations: Location[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(): void {
    this.userService.getUsers()
    .subscribe(locations => {
      this.locations = locations.map(location => {
        return {lat: +location.latitude, lng: +location.longitude, isActive: location.isActive, id: location.id}
      })
  });
  }

  clickedMarker(index: string) {
    console.log(`clicked the marker: ${index}`)
  }

}

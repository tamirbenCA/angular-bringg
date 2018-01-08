import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Location } from '../location';
import { UserService } from '../user.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // lat: number = 32.106748;
  // lng: number = 34.8336526;
  locations: Location[]

  constructor(  private userService: UserService ,
                private route: ActivatedRoute ,
                private router: Router) { }

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

  clickedMarker(userId: string) {
    console.log(`clicked the marker: ${userId}`)
    this.router.navigate([`/detail/${userId}`])
  }

  markerIconUrl(isActive) {
    // if (isActive) return require('../assets/green-dot.png')
    // else return require('../assets/red-dot.png')
    if (isActive) return '../assets/green-dot.png'
    else return '../assets/red-dot.png'
}

}

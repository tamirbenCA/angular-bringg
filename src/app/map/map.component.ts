import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() locations: object;


  constructor(  private route: ActivatedRoute ,
                private router: Router) { }

  ngOnInit() {
  }

  clickedMarker(userId: string) {
    console.log(`clicked the marker: ${userId}`)
    this.router.navigate([`/detail/${userId}`])
  }

  markerIconUrl(isActive) {
    if (isActive) return require('../assets/green-dot.png')
    else return require('../assets/red-dot.png')
    // if (isActive) return '../assets/green-dot.png'
    // else return '../assets/red-dot.png'
}

}

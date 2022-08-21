import { Component, OnInit } from '@angular/core';
import { PlanetDetails } from 'src/interfaces/details/planets-details.interface';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss'],
})
export class PlanetDetailsComponent implements OnInit {
  planetDetails!: PlanetDetails;
  constructor() {}

  ngOnInit(): void {
    this.planetDetails = history.state.data;
  }
}

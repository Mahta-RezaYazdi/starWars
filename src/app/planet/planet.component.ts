import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Planet } from 'src/interfaces/planets.interface';
import { PlanetDetails } from 'src/interfaces/details/planets-details.interface';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent implements OnInit {
  @Input() planet!: Planet;
  @Input() id!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    // this.passCharacterService.dataEmitter.emit(this.character);
    const planetDetails: PlanetDetails = {
      name: this.planet.name,
      population: this.planet.population,
      diameter: this.planet.diameter,
      climate: this.planet.climate,
      terrain: this.planet.terrain,
      gravity: this.planet.gravity,
      orbital_period: this.planet.orbital_period,
      rotation_period: this.planet.rotation_period,
      surface_water: this.planet.surface_water,
    };
    this.router.navigate(['/home/planets', this.id], {
      state: { data: planetDetails },
    });
  }
}

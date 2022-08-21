import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StarhsipDetails } from 'src/interfaces/details/starship-details.interface';
import { Starship } from 'src/interfaces/starships.interface';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
})
export class StarshipComponent implements OnInit {
  @Input() starship!: Starship;
  @Input() id!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    const starshipDetails: StarhsipDetails = {
      name: this.starship.name,
      model: this.starship.model,
      manufacturer: this.starship.manufacturer,
      MGLT: this.starship.MGLT,
      length: this.starship.length,
      max_atmosphering_speed: this.starship.max_atmosphering_speed,
      hyperdrive_rating: this.starship.hyperdrive_rating,
      cargo_capacity: this.starship.cargo_capacity,
      passengers: this.starship.passengers,
      crew: this.starship.crew,
      consumables: this.starship.consumables,
      cost_in_credits: this.starship.cost_in_credits,
    };
    this.router.navigate(['/home/starships', this.id], {
      state: { data: starshipDetails },
    });
  }
}

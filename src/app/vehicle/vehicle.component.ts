import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicle } from 'src/interfaces/vehicles.interface';
import { VehicleDetails } from 'src/interfaces/details/vehicle-details.interface';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  @Input() vehicle!: Vehicle;
  @Input() id!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    // this.passCharacterService.dataEmitter.emit(this.character);
    const vehicleDetails: VehicleDetails = {
      name: this.vehicle.name,
      model: this.vehicle.model,
      manufacturer: this.vehicle.manufacturer,
      length: this.vehicle.length,
      max_atmosphering_speed: this.vehicle.max_atmosphering_speed,
      cargo_capacity: this.vehicle.cargo_capacity,
      passengers: this.vehicle.passengers,
      crew: this.vehicle.crew,
      consumables: this.vehicle.consumables,
      cost_in_credits: this.vehicle.cost_in_credits,
    };
    this.router.navigate(['/home/vehicles', this.id], {
      state: { data: vehicleDetails },
    });
  }
}

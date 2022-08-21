import { Component, OnInit } from '@angular/core';
import { VehicleDetails } from 'src/interfaces/details/vehicle-details.interface';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss'],
})
export class VehicleDetailsComponent implements OnInit {
  vehicleDetails!: VehicleDetails;
  constructor() {}

  ngOnInit(): void {
    this.vehicleDetails = history.state.data;
  }
}

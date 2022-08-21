import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../services/vehicles.service';
import { Data } from '@angular/router';
import { Vehicle } from 'src/interfaces/vehicles.interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];
  pageNumber: number = 1;
  constructor(private vehicleService: VehiclesService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(url?: string): void {
    this.vehicleService.getVehicles(url).subscribe((res: Data) => {
      for (let i = 0; i < res['results'].length; i++) {
        this.vehicles.push(res['results'][i]);
      }
      if (res['next']) {
        this.getVehicles(res['next']);
      }
    });
  }
}

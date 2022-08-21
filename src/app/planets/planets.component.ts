import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../services/planets.service';
import { Data } from '@angular/router';
import { Planet } from 'src/interfaces/planets.interface';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent implements OnInit {
  planets: Planet[] = [];
  pageNumber: number = 1;
  constructor(private planetService: PlanetsService) {}

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets(url?: string): void {
    this.planetService.getPlanets(url).subscribe((res: Data) => {
      for (let i = 0; i < res['results'].length; i++) {
        this.planets.push(res['results'][i]);
      }
      if (res['next']) {
        this.getPlanets(res['next']);
      }
    });
  }
}

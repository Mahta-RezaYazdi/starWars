import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../services/species.service';
import { Data } from '@angular/router';
import { Species } from 'src/interfaces/species.interface';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss'],
})
export class SpeciesListComponent implements OnInit {
  species: Species[] = [];
  pageNumber: number = 1;
  constructor(private speciesService: SpeciesService) {}

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(url?: string): void {
    this.speciesService.getSpecies(url).subscribe((res: Data) => {
      for (let i = 0; i < res['results'].length; i++) {
        this.species.push(res['results'][i]);
      }
      if (res['next']) {
        this.getSpecies(res['next']);
      }
    });
  }
}

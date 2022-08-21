import { Component, OnInit } from '@angular/core';
import { SpeciesDetails } from 'src/interfaces/details/species-details.interface';
@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss'],
})
export class SpeciesDetailsComponent implements OnInit {
  speciesDetails!: SpeciesDetails;
  constructor() {}

  ngOnInit(): void {
    this.speciesDetails = history.state.data;
  }
}

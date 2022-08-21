import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Species } from 'src/interfaces/species.interface';
import { SpeciesDetails } from 'src/interfaces/details/species-details.interface';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss'],
})
export class SpeciesComponent implements OnInit {
  @Input() species!: Species;
  @Input() id!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    // this.passCharacterService.dataEmitter.emit(this.character);
    const speciesDetails: SpeciesDetails = {
      name: this.species.name,
      classification: this.species.classification,
      designation: this.species.designation,
      language: this.species.language,
      average_lifespan: this.species.average_height,
      average_height: this.species.average_height,
      skin_colors: this.species.skin_colors,
      hair_colors: this.species.hair_colors,
      eye_colors: this.species.eye_colors,
    };
    this.router.navigate(['/home/species', this.id], {
      state: { data: speciesDetails },
    });
  }
}

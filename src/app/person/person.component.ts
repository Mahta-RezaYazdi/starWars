import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { People } from 'src/interfaces/people.interface';
import { PersonDetails } from 'src/interfaces/details/person-details.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() person!: People;
  @Input() id!: number;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    // this.passCharacterService.dataEmitter.emit(this.character);
    const characterDetails: PersonDetails = {
      name: this.person.name,
      birthYear: this.person.birth_year,
      gender: this.person.gender,
      height: this.person.height,
      skinColor: this.person.skin_color,
      hairColor: this.person.hair_color,
      eyeColor: this.person.eye_color,
    };
    this.router.navigate(['/home/people', this.id], {
      state: { data: characterDetails },
    });
  }
}

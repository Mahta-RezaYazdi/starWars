import { Component, OnInit } from '@angular/core';
import { PersonDetails } from 'src/interfaces/details/person-details.interface';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {
  personDetails!: PersonDetails;
  constructor() {}

  ngOnInit(): void {
    this.personDetails = history.state.data;
  }
}

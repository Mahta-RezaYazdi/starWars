import { Component, OnInit } from '@angular/core';
import { StarhsipDetails } from 'src/interfaces/details/starship-details.interface';
@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss'],
})
export class StarshipDetailsComponent implements OnInit {
  starshipsDetails!: StarhsipDetails;

  constructor() {}

  ngOnInit(): void {
    this.starshipsDetails = history.state.data;
  }
}

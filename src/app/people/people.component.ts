import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Data } from '@angular/router';
import { People } from 'src/interfaces/people.interface';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  people: People[] = [];
  pageNumber: number = 1;
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(url?: string): void {
    this.peopleService.getCharacters(url).subscribe((res: Data) => {
      for (let i = 0; i < res['results'].length; i++) {
        this.people.push(res['results'][i]);
      }
      if (res['next']) {
        this.getPeople(res['next']);
      }
    });
  }
}

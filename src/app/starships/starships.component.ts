import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../services/starships.service';
import { Data } from '@angular/router';
import { Starship } from 'src/interfaces/starships.interface';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent implements OnInit {
  starships: Starship[] = [];
  pageNumber: number = 1;
  constructor(private starshipService: StarshipsService) {}

  ngOnInit(): void {
    this.getStarships();
  }

  getStarships(url?: string): void {
    this.starshipService.getStarships(url).subscribe((res: Data) => {
      for (let i = 0; i < res['results'].length; i++) {
        this.starships.push(res['results'][i]);
      }
      if (res['next']) {
        this.getStarships(res['next']);
      }
    });
  }
}

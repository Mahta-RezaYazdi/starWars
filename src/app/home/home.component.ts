import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  links: string[] = ['People', 'Planets', 'Species', 'Starships', 'Vehicles'];

  constructor() {}

  ngOnInit(): void {}

  getLink(id: number): string {
    return `/home/${this.links[id].toLocaleLowerCase()}`;
  }
}

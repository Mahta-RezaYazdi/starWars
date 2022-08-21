import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() navigationLinks: string[] = ['Home', 'About', 'Logout'];
  @Input() hasLogo: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  getLink(id: number): string {
    return `/${this.navigationLinks[id].toLocaleLowerCase()}`;
  }
}

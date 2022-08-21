import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() url!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(): void {
    this.router.navigateByUrl(this.url);
  }
}

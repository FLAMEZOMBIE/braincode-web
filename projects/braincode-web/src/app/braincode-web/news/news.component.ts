import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';

@Component({
  selector: 'anms-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // releaseButler = require('../../../../assets/release-butler.png').default;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submenu(url: string) {
    if (url == 'more1') {
      this.router.navigate(['/braincode-web/news/more1']);
    } else if (url == 'more2') {
      this.router.navigate(['/braincode-web/news/more2']);
    } else if (url == 'more3') {
      this.router.navigate(['braincode-web/news/more3']);
    } else if (url == 'more4') {
      this.router.navigate(['braincode-web/news/more4']);
    } else {
      this.router.navigate(['/braincode-web/news/more5']);
    }
  }
}

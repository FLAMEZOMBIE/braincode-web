import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

@Component({
  selector: 'anms-font-awesome-demo',
  templateUrl: './font-awesome-demo.component.html',
  styleUrls: ['./font-awesome-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FontAwesomeDemoComponent implements OnInit {
  filmIcon = faFilm;

  constructor() {}

  ngOnInit(): void {}
}

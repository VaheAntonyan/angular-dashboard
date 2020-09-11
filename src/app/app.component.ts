import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  init: boolean;

  ngAfterViewInit() {
    this.init = true;
  }

}

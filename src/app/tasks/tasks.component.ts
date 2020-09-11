import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {
  togglePopup: boolean;
  constructor() { }

  ngOnInit() {
  }

}

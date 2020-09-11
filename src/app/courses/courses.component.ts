import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {

  courses = [
    {
      name: 'Database',
      teacherOne: 'Kim Saroyan',
      teacherTwo: 'Angela Matinyan',
    },
    {
      name: 'Java',
      teacherOne: 'Ashot Karapetyan',
      teacherTwo: 'Susanna Beglaryan',
    },
    {
      name: 'Javascript',
      teacherOne: 'Tamara Aprikyan',
      teacherTwo: 'Suzanna Loretsyan',
    },
    {
      name: 'Html & Css',
      teacherOne: 'Kadmos Balkhchyan',
      teacherTwo: 'Lilit Gevorgyan',
    }
  ];

  selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}

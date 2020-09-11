import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ParticipantsComponent implements OnInit {

  participants = [
    {
      name: 'Armen',
      info: 'Armen info'
    },
    {
      name: 'Ashot',
      info: 'Ashot info'
    },
    {
      name: 'Anahit',
      info: 'Anahit info'
    },
    {
      name: 'Sargis',
      info: 'Sargis info'
    },
    {
      name: 'Harut',
      info: 'Harut info'
    },
    {
      name: 'Ashxen',
      info: 'Ashxen info'
    }
  ];

  selected: any;


  constructor() { }

  ngOnInit() {
  }

}

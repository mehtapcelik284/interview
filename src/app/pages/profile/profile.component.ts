import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  user: User;
  colCountByScreen: object;

  constructor() {
    this.user = {
      id: 7,
      firstName: 'Sandra',
      lastName: 'Johnson',
      prefix: 'Mrs.',
      position: 'Controller',
      picture: 'images/users/06.png',
      birthDate: new Date('1974/11/5'),
      hireDate: new Date('2005/05/11'),
      assignedTasks: 33,
      notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
      address: '4600 N Virginia Rd.',
      phoneNumber: '+49 151 240 123 87',
      email: 'sandra@example.com'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}

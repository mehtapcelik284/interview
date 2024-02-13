import { Component } from '@angular/core';
import { Employee } from './model/user';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  employee: Employee;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      id: 7,
      firstName: 'Sandra',
      lastName: 'Johnson',
      phoneNumber: '+49 151 240 123 87',
      prefix: 'Mrs.',
      position: 'Controller',
      picture: 'images/employees/06.png',
      birthDate: new Date('1974/11/5'),
      hireDate: new Date('2005/05/11'),
      assignedTasks: 33,
      notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
      address: '4600 N Virginia Rd.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}

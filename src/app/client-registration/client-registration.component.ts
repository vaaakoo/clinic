import { Component } from '@angular/core';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {

  user = {
    firstName: '',
    lastName: '',
    email: '',
    idNumber: '',
    activationCode: '',
    password: ''
  };

  onSubmit() {
    // You can handle form submission logic here
    console.log('Form submitted:', this.user);
  }
}

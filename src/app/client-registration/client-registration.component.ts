import { Component } from '@angular/core';
import { RegistrationDetailsService } from '../shared/registration-details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {

  constructor (public service: RegistrationDetailsService) {
  }
  

  onSubmit(form:NgForm) {
    
    this.service.formSubmitted = true;
    if(form.valid){
      this.service.postRegistrationDetails()
      .subscribe({
        next: res => {
          this.service.resetForm(form)
        },
        error: err => {console.log(err)}
      })
    }
  }
}

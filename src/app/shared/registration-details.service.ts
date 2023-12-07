import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment.development';
import { RegistrationDetails } from './registration-details.model';
import { NgForm } from '@angular/forms';
 
@Injectable({
  providedIn: 'root'
})
export class RegistrationDetailsService {

  url:string = environment.apiBaseUrl + '/RegistrationDetail'
  list:RegistrationDetails[] = [];
  formData : RegistrationDetails = new RegistrationDetails()
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
    .subscribe({
      next: res => {
        console.log(res)
        this.list = res as RegistrationDetails[]
      },
      error: err => {console.log(err)}
    })
  }

    postRegistrationDetails(){
     return this.http.post(this.url, this.formData) 
     
    }

    resetForm(form:NgForm) {
      form.form.reset()
      this.formData = new RegistrationDetails()
      this.formSubmitted =false;
    }
  
}

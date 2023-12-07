import { Component, OnInit } from '@angular/core';
import { RegistrationDetailsService } from '../shared/registration-details.service';

@Component({
  selector: 'app-registration-details',
  templateUrl: './registration-details.component.html',
  styleUrls: ['./registration-details.component.css']
})
export class RegistrationDetailsComponent implements OnInit{

  constructor(public service: RegistrationDetailsService)  {

  }
  ngOnInit(): void {
    this.service.refreshList()
  }
}

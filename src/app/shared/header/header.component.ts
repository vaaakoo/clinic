import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor(private router: Router) {}

  // Method to navigate to the registration page
  navigateToRegistration() {
    this.router.navigate(['/client-reg']);
  }
  // navigateToAuthorization() {
  //   this.router.navigate(['/authorization']);
  // }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  activeTab: string = 'doctors';
  activeRole: string = 'doctor';
  rows: number[][] = Array.from({ length: 9 }, () => Array(8).fill(0));

  constructor( private router: Router ) { }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
    if (tab === 'registration') {
      this.router.navigate(['/admin-page/registration']);
    }
    if (tab === 'categories') {
      this.router.navigate(['/admin-page/category']);
    }
    // Add other conditions if needed
  }

  setActiveRole(role: string) {
    this.activeRole = role;
  }
}

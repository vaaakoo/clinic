import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent  {

  rows: number[][] = Array.from({ length: 9 }, () => Array(8).fill(0));
}

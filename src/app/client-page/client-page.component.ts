import { Component } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent {
  rows: number[][] = Array.from({ length: 9 }, () => Array(8).fill(0));
}

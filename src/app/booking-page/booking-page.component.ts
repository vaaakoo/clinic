import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent {

  isAuthorized: boolean = false;
  unauthorizedMessageShown: boolean = false;


  activeMessageBox: boolean = false;
  activeTab: string = 'doctors';
  activeRole: string = 'doctor';
  tableData: { cols: { value: string; activated: boolean }[] }[] = [];
  tableHeaders: { num: number; day: string }[] = [
    { num: 17, day: 'mon' },
    { num: 18, day: 'tue' },
    { num: 19, day: 'wed' },
    { num: 20, day: 'thu' },
    { num: 21, day: 'fri' },
    { num: 22, day: 'sat' },
    { num: 23, day: 'sun' },
  ];


  constructor( private router: Router, private authService: AuthService ) { }
  
  ngOnInit() {
    for (let i = 1; i <= 9; i++) {
      const row = { cols: [] as { value: string; activated: boolean }[] };
      for (let j = 1; j <= 7; j++) {
        row.cols.push({ value: `${i}-${j}`, activated: false });
      }
      this.tableData.push(row);
    };
    this.authService.isAuthenticated.subscribe((loggedIn) => {
      this.isAuthorized = loggedIn;
    });
  }

  toggleCellActivation(rowIndex: number, colIndex: number) {
    const isLastTwoColumns = colIndex >= 5;
    if (!isLastTwoColumns && !this.isAuthorized) {
      this.tableData[rowIndex].cols[colIndex].activated = !this.tableData[rowIndex].cols[colIndex].activated;
    } else {
      this.showUnauthorizedMessage();
      
    }
  }
  showUnauthorizedMessage() {
    console.log("please autorize acount");
    this.unauthorizedMessageShown = true;
  }

  deleteCell(rowIndex: number, colIndex: number) {
    !this.tableData[rowIndex].cols[colIndex].activated;
  }

  getTimeRange(rowNumber: number): string {
    const startTime = 9;
    const endTime = 18;
    const timeSlot = 1;

    const startHour = startTime + rowNumber * timeSlot;
    const endHour = startHour + timeSlot;

    return `${startHour}:00 - ${endHour}:00`;
  }


}
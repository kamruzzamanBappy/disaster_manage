import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //donation
  previousDaysDonation = ['1-1-2024: $1000', '2-1-2024:$200'];
  todaysDonation = '$1000';
  //expense
  previousDaysExpense = ['1-1-2024: $800', '2-1-2024:$100'];
  todaysExpense = '$1000';
  constructor(public router: Router) {}
  onDonation() {
    this.router.navigate(['/dm/donation']);
  }
  onExpense() {
    this.router.navigate(['/dm/expense']);
  }
}

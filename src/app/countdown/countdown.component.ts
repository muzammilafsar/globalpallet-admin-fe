import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() date ;
  expired: Boolean = false;
  minutes: Number = 0;
  seconds: Number = 0;
  constructor() { }
  get getminutes() {
    return this.minutes;
  }
  ngOnInit() {

  // Set the date we're counting down to
const countDownDate = moment(new Date(this.date)).add(40, 'minutes').toDate().getTime();
// console.log(new Date(this.date), countDownDate);
// Update the count down every 1 second
  const x = setInterval(() => {

  // Get todays date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // this.setTime(this.minutes, this.seconds);
  // console.log(this.minutes, this.seconds);
  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    if (this.seconds < 0) {this.seconds = Math.floor(-(distance % (1000 * 60)) / 1000);};
    // clearInterval(x);
    // document.getElementById("demo").innerHTML = "EXPIRED";
    this.expired = true;
  }
}, 1000);
  }
}

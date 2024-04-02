import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

  star: string;

  constructor(private Custom: CustomerService) { }

  ngOnInit() {
    this.Custom.getfeedbacks();
    this.star = 'https://www.pngkey.com/png/full/64-646764_blue-star-png-image-navy-star-clip-art.png';
  }

  createRange(number) {
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  get feedbackdata() {
    return this.Custom.feedback;
  }

}

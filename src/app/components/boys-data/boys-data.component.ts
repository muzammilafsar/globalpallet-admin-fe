import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';


@Component({
  selector: 'app-boys-data',
  templateUrl: './boys-data.component.html',
  styleUrls: ['./boys-data.component.css']
})
export class BoysDataComponent implements OnInit {

  boysdata = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getboys();
  }

getboys() {
  this.api.get(`/getdeliveryreport`).subscribe((data: any) => {
  this.boysdata = data;
  console.log("boys data delivery", data);
  });
}

}

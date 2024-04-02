import { Component, OnInit } from '@angular/core';
import { DeliveryBoysService } from 'src/app/delivery-boys.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delivery-boys',
  templateUrl: './delivery-boys.component.html',
  styleUrls: ['./delivery-boys.component.css']
})
export class DeliveryBoysComponent implements OnInit {

  delboys = [];

  constructor(private delboy: DeliveryBoysService, private router: Router) { }

  ngOnInit() {
   this.getDelBoys();
  }

  getDelBoys() {
    this.delboy.DeliveryBoys().subscribe((data: any[])=> {
      this.delboys = data;
      console.log('delivery boys', data);
     });
  }

  editBoy(id) {
    this.router.navigate([`/editdeliveryboy/${id}`]);
  }

  deleteBoy(id) {
    alert('are you sure ?');
    this.delboy.deleteboy(id).subscribe(() => {
      this.getDelBoys();
    });
  }

}

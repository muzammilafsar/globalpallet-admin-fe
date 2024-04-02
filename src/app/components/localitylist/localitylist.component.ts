import { Component, OnInit } from '@angular/core';
import { LocalityService } from '../../locality.service';
import {Router} from '@angular/router';

import {Locality} from '../../../locality.model';

@Component({
  selector: 'app-localitylist',
  templateUrl: './localitylist.component.html',
  styleUrls: ['./localitylist.component.css']
})
export class LocalitylistComponent implements OnInit {

  locality: Locality[];

  constructor(private localityService: LocalityService, private router: Router) { }

  ngOnInit() {
    this.fetchlocality();
  }

  fetchlocality() {
    this.localityService
      .getLocality()
      .subscribe((data: Locality[]) => {
        this.locality = data;
        console.log('Data requested ...');
        console.log(this.locality);
      });
  }

  editLocality(id) {
    this.router.navigate([`/editlocality/${id}`]);
  }

  deleteLocality(id) {
    this.localityService.deleteLocality(id).subscribe(() => {
      this.fetchlocality();
    });
  }
}

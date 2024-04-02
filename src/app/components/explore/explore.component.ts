import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';
import {Router} from '@angular/router';

import {Explore} from '../../../explore.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

explore: Explore[];

  constructor(private exploreService: ExploreService, private router: Router) { }

  ngOnInit() {
    this.fetchExplore();
  }

  fetchExplore() {
    this.exploreService
      .getexplore()
      .subscribe((data: Explore[]) => {
        this.explore = data;
        console.log('Data requested ...');
        console.log('EXPLORING', this.explore);
      });
  }

  editExplore(id) {
    this.router.navigate([`/editexplore/${id}`]);
  }

  deleteExplore(id) {
    this.exploreService.deleteExplore(id).subscribe(() => {
      this.fetchExplore();
    });
  }
}

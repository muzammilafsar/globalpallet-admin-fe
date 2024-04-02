import { Component, OnInit } from '@angular/core';
import { ExploreService } from '../../explore.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-explore',
  templateUrl: './edit-explore.component.html',
  styleUrls: ['./edit-explore.component.css']
})
export class EditExploreComponent implements OnInit {

  id: String;
  explore: any = {};
  updateForm: FormGroup;

  constructor( private exploreService: ExploreService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder ) {
    this.createForm();
   }

  createForm() {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      icon: '',
      image: '',
      color: '',
      title: '',
      tag: '',
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.exploreService.getExploreById(this.id).subscribe(res => {
        this.explore = res;
        this.updateForm.get('name').setValue(this.explore.name);
        this.updateForm.get('icon').setValue(this.explore.icon);
        this.updateForm.get('image').setValue(this.explore.image);
        this.updateForm.get('color').setValue(this.explore.color);
        this.updateForm.get('title').setValue(this.explore.detail.title);
        this.updateForm.get('tag').setValue(this.explore.detail.tag);
        console.log(this.explore);
      });
    });
  }

  updateExplore(name, icon, image, color, title, tag) {
    // tslint:disable-next-line:max-line-length
    this.exploreService.updateExplore(this.id, name, icon, image, color, title, tag).subscribe(res => {
      console.log('shaan', res);
      this.router.navigate(['/explorelist']);
     });
  }

}

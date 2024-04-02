import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LocalityService } from '../../locality.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createlocality',
  templateUrl: './createlocality.component.html',
  styleUrls: ['./createlocality.component.css']
})
export class CreatelocalityComponent implements OnInit {

  createForm: FormGroup;

  constructor(private localityService: LocalityService, private fb: FormBuilder, private router: Router) {
  this.createForm = this.fb.group({
    key: ['', Validators.required],
    name: ['', Validators.required],
    enable: ['', Validators.required],
    description: ['', Validators.required],  
    locality_id: ['', Validators.required],
    index: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  addLocality(key, name, enable, description, locality_id, index) {
    // tslint:disable-next-line:max-line-length
    this.localityService.addLocality(key, name, enable, description, locality_id, index).subscribe(() => {
      this.router.navigate(['/localitylist']);
    });
  }

}

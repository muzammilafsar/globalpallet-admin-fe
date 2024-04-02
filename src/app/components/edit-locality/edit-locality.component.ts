import { Component, OnInit } from '@angular/core';
import { LocalityService } from '../../locality.service';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-locality',
  templateUrl: './edit-locality.component.html',
  styleUrls: ['./edit-locality.component.css']
})
export class EditLocalityComponent implements OnInit {

  id: String;
  locality: any = {};
  updateForm: FormGroup;

  constructor(private localityService: LocalityService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
      key: '',
      name: '',
      enable: '',
      description: '',
      locality_id: '',
      index: ''
      });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.localityService.getLocalityById(this.id).subscribe(res => {
        this.locality = res;
        console.log('bla',this.locality);
        this.updateForm.patchValue({})
        this.updateForm.get('key').setValue(this.locality.key);
        this.updateForm.get('name').setValue(this.locality.name);
        this.updateForm.get('enable').setValue(this.locality.enable);
        this.updateForm.get('description').setValue(this.locality.description);
        this.updateForm.get('locality_id').setValue(this.locality.locality_id);
        this.updateForm.get('index').setValue(this.locality.index);
      });
    });
  }

  updateLocality(key, name, enable, description, locality_id, index) {
    // tslint:disable-next-line:max-line-length
    this.localityService.updatelocality(this.id, key, name, enable, description, locality_id, index).subscribe(() => {
      this.router.navigate(['/localitylist']);
    });
  }

}

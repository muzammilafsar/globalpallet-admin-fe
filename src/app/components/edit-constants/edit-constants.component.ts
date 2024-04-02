import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../constants.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-constants',
  templateUrl: './edit-constants.component.html',
  styleUrls: ['./edit-constants.component.css']
})
export class EditConstantsComponent implements OnInit {

  id: String;
  key: String;
  constant: any = {};
  updateForm: FormGroup;

  constructor(private constantsService: ConstantsService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.updateForm = this.fb.group({
      key: '',
      constants: ''
      });
  }
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.constantsService.getConstantsById(this.id).subscribe(res => {
        this.constant = res;
        console.log(this.constant);
        this.updateForm.patchValue({})
        this.updateForm.get('key').setValue(this.constant.key);
        this.updateForm.get('constants').setValue(this.constant.constants);
      });
    });
  }
  updateConstants(key, constants) {
    // tslint:disable-next-line:max-line-length
    this.constantsService.updateConstants(key, constants).subscribe(() => {
      this.router.navigate(['/constantslist']);
    });
  }

}

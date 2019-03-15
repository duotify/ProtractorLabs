import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';

@Component({
  selector: 'app-fire-form',
  templateUrl: './fire-form.component.html',
  styleUrls: ['./fire-form.component.css']
})
export class FireFormComponent implements OnInit {
  orderForm: FormGroup;
  message: String;
  constructor(private fb: FormBuilder) { }

  createForm() {
    this.orderForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  onFire() {
    this.message = '送出成功';
  }
}

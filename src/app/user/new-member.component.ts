import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router} from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import tr from 'toastr';
@Component({
  templateUrl: './new-member.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
    span {
      cursor:pointer;
      text-decoration:underline;
 }
  `]
})
export class NewMemberComponent implements OnInit {
  profileForm: FormGroup;
  private username: FormControl;
  private password: FormControl;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private router: Router,
    private authService: AuthService,
    private ngZone: NgZone,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl('', Validators.required);
    this.profileForm = new FormGroup({
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  addNerUser(formValues) {
    if (this.profileForm.valid) {

      this.authService.newUser(formValues.username, formValues.password, formValues.firstName, formValues.lastName)
      .subscribe(() => {
        this.router.navigate(['events']);
        tr.options.timeOut = 1;
        tr.success('新增成功');
        // this.toastr.success('新增成功');
      });
    } else {
      alert('請輸入基本資料');
    }
  }

  validateUsername() {
    return this.username.valid || this.username.untouched;
  }

  validatePassword() {
    return this.password.valid || this.password.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }

  popupTerm() {
    // tslint:disable-next-line:max-line-length
    window.open('http://localhost:4200/assets/memberterm.html', '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=300,width=500,height=500');
    // window.open('http://localhost:4200/assets/memberterm.html');
  }
}

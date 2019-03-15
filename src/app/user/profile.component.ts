import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router} from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import tr from 'toastr';
@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  timer: number;

  constructor(private router: Router,
    private authService: AuthService,
    private ngZone: NgZone,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {

    this.timer = 300;
  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

        // TODO: 這裡給學員的時候要調整
    // 錯誤的寫法
    // setInterval(
    //   () => this.timer--,
    //   1000);

    // 正確的寫法
    // this.ngZone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     this.ngZone.run(() => {
    //       this.timer++;
    //     });
    //   }, 1000);
    // });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      .subscribe(() => {
        tr.success('儲存成功');
      });
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
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

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

  result;
  images;
  captchaCode: string;
  currentCode;
  constructor() {
    this.images = [
      ['K3KH', '/assets/images/captcha-1.jpg'],
      ['TMYK', '/assets/images/captcha-2.jpg'],
      ['P6BK', '/assets/images/captcha-3.jpg']
    ];
    this.currentCode = this.images[Math.floor(Math.random() * 3)];
  }

  ngOnInit() {

    Math.floor(Math.random() * 10);

  }

  submit() {
    if (this.captchaCode.toLowerCase() === this.currentCode[0].toLowerCase()) {
      this.result = '驗證碼正確';
    } else {
      this.result = '驗證碼錯誤';
    }
  }
}

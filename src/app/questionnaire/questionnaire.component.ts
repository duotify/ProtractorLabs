import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  codeLanguage;
  username;
  result;
  timer;
  constructor(private ngZone: NgZone) {
    this.timer = 59;
  }

  ngOnInit() {

    setInterval(
      () => {
        if (this.timer === 0) {
          this.timer = 59;
        } else {
          this.timer--;
        }
      },
      1000);
  }

  submit() {
    this.result = '送出成功';
  }
}

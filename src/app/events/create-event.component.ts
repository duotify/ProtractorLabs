import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './shared/index'

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
  newEvent;
  selectedFile: File = null;
  isDirty:boolean = true;
  constructor(private router: Router, private eventService:EventService) {

  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues, this.selectedFile).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/events'])
    });
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
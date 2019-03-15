import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1: return '半小時';
      case 2: return '一小時';
      case 3: return '半天';
      default: return value.toString();
    }
  }

}

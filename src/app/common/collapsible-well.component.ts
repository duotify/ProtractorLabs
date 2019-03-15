import { Component, Input } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
  <div class="well pointable">
    <h4>
      <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content *ngIf="visible" select="[well-body]"></ng-content>
  </div>
  `
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}

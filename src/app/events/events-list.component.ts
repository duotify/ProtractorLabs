import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from './shared/index';

@Component({
  template: `
  <form id="searchForm" (ngSubmit)="searchSessions(searchTerm)" class="row">
  <div class="col-md-4">
    <input [(ngModel)]="searchTerm" name="searchTerm" type="text" class="form-control" placeholder="輸入議程關鍵字" >
  </div>
  <button class="btn btn-default col-md-1" modal-trigger="searchResults">
    搜尋
  </button>
</form>
  <div>
    <h1>活動列表</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-4">
        <event-thumbnail [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  <simple-modal closeOnBodyClick="true" elementId="searchResults" title="符合的議程">
  <div class="list-group">
    <a class="list-group-item" *ngFor="let session of foundSessions" [routerLink]="['/events', session.eventId]">{{session.name}}</a>
  </div>
</simple-modal>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  searchTerm = '';
  foundSessions: ISession[];
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      console.log(sessions);
      this.foundSessions = sessions;
    });
  }
}

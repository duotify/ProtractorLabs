import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events/index';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];
  timer: number;
  constructor(
    public auth: AuthService,
    private eventService: EventService,
    private ngZone: NgZone
    ) {
    this.timer = 0;
  }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      console.log(sessions);
      this.foundSessions = sessions;
    });
  }
}

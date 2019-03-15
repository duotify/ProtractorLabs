import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  EventResolver
} from './events/index';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service.guard';
import { GifComapreComponent } from './labs/gif-comapre/gif-comapre.component';
import { LablistComponent } from './labs/lablist/lablist.component';
import { FireFormComponent } from './fire-form/fire-form.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { CaptchaComponent } from './captcha/captcha.component';

// 無權限控管
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'labs/lablist', component: LablistComponent },
  { path: 'labs/gif', component: GifComapreComponent },
  { path: 'labs/fireform', component: FireFormComponent },
  { path: 'labs/questionnaire', component: QuestionnaireComponent },
  { path: 'labs/captcha', component: CaptchaComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];
// 有權限控管
// export const appRoutes: Routes = [
//   { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'], canActivate: [EventRouteActivator] },
//   { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}, canActivate: [EventRouteActivator] },
//   { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}, canActivate: [EventRouteActivator] },
//   { path: 'events/session/new', component: CreateSessionComponent },
//   { path: 'labs/lablist', component: LablistComponent },
//   { path: 'labs/gif', component: GifComapreComponent },
//   { path: 'labs/fireform', component: FireFormComponent },
//   { path: '404', component: Error404Component },
//   { path: '', redirectTo: '/events', pathMatch: 'full'},
//   { path: 'user', loadChildren: './user/user.module#UserModule'}
// ];

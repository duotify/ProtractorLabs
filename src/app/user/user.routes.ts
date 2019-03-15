import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';
import { NewMemberComponent } from './new-member.component';
import { EventRouteActivator } from '../events/event-details/event-route-activator.service.guard';

// 無權限控管
export const userRoutes = [
  {path: 'profile', component: ProfileComponent, canActivate: [EventRouteActivator]},
  {path: 'login', component: LoginComponent},
  {path: 'new', component: NewMemberComponent}
];

// 有權限控管
// export const userRoutes = [
//   {path: 'profile', component: ProfileComponent, canActivate: [EventRouteActivator]},
//   {path: 'login', component: LoginComponent},
//   {path: 'new', component: NewMemberComponent, canActivate: [EventRouteActivator]}
// ];

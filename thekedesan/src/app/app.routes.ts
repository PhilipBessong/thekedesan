import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rooms', component: Rooms }

];

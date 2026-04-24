import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
import { RoomDetails } from './room-details/room-details';
import { Amenities } from './amenities/amenities';
import {Aboutus} from './aboutus/aboutus';
import {Faqs} from './faqs/faqs';
import { Policyterms } from './policyterms/policyterms';
import { AmenitiesDetails } from './amenities-details/amenities-details';
import { AppVirtualTour } from './app-virtual-tour/app-virtual-tour';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rooms', component: Rooms },
  { path: 'rooms/:id', component: RoomDetails },
  { path: 'amenities', component: Amenities },
  { path: 'amenities/:id', component: AmenitiesDetails },
  { path: 'aboutus', component: Aboutus },
  { path: 'faqs', component: Faqs },
  { path: 'policy-terms', component: Policyterms },
  { path: 'virtual-tour', component: AppVirtualTour }

];

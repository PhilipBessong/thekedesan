import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
import { RoomDetails } from './room-details/room-details';
import { Amenities } from './amenities/amenities';
import { Aboutus } from './aboutus/aboutus';
import { Faqs } from './faqs/faqs';
import { Policyterms } from './policyterms/policyterms';
import { AmenitiesDetails } from './amenities-details/amenities-details';
import { AppVirtualTour } from './app-virtual-tour/app-virtual-tour';
import { Ktable } from './ktable/ktable';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', title: 'The Kedesan Huis', component: Home },
  {
    path: 'rooms',
    title: 'The Kedesan | Accommodations & Suites',
    component: Rooms,
  },
  {
    path: 'rooms/:id',
    title: 'The Kedesan | Room Details',
    component: RoomDetails,
  },
  {
    path: 'amenities',
    title: 'The Kedesan | Amenities & Guest Services',
    component: Amenities,
  },
  {
    path: 'amenities/:id',
    title: 'The Kedesan | Amenity Details',
    component: AmenitiesDetails,
  },
  {
    path: 'aboutus',
    title: 'The Kedesan | About Our Retreat',
    component: Aboutus,
  },
  {
    path: 'faqs',
    title: 'The Kedesan | Frequently Asked Questions',
    component: Faqs,
  },
  {
    path: 'policy-terms',
    title: 'The Kedesan | Policy & Terms',
    component: Policyterms,
  },
  {
    path: 'virtual-tour',
    title: 'The Kedesan | Virtual Tour',
    component: AppVirtualTour,
  },
  {
    path: 'the-kedesan-table',
    title: 'The Kedesan | The Kedesan Table',
    component: Ktable,
  },
];

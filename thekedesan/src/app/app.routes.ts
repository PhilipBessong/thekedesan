import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
import { Amenities } from './amenities/amenities';
import {Aboutus} from './aboutus/aboutus';
import {Faqs} from './faqs/faqs';
import { Policyterms } from './policyterms/policyterms';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'rooms', component: Rooms },
  { path: 'amenities', component: Amenities },
  { path: 'aboutus', component: Aboutus },
  { path: 'faqs', component: Faqs },
  { path: 'policy-terms', component: Policyterms }

];

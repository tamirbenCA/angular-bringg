import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'
import { UsersComponent } from './users/users.component'
import { MapComponent } from './map/map.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { AddUserComponent } from './add-user/add-user.component'


const routes: Routes = [
  // { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  // { path: 'map', component: MapComponent },
  // { path: 'users' , component: UsersComponent },
  { path: '', component: HomepageComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'adduser', component: AddUserComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

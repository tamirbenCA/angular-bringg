import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component'
import { UserDetailComponent } from './user-detail/user-detail.component'
import { MapComponent } from './map/map.component'


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users' , component: UsersComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'map', component: MapComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

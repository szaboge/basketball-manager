import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsComponent} from './teams/teams.component';
import {AddPlayerComponent} from './add-player/add-player.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {path: 'teams', component: TeamsComponent, canActivate: [AuthGuard]},
  {path: 'add-player', component: AddPlayerComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/teams', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

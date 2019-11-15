import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamsComponent} from './teams/teams.component';
import {AddPlayerComponent} from './add-player/add-player.component';


const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'add-player', component: AddPlayerComponent},
  { path: '', redirectTo: '/teams', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {DataService, Team} from '../services/data.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams = new BehaviorSubject<Array<Team>>(null);

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeams()
      .subscribe((value: Array<Team>) => {
      this.teams.next(value);
    });
  }

}

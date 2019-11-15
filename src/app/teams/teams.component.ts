import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}

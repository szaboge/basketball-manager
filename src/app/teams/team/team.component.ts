import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../services/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() name: string;
  @Input() players: Array<Player>;

  constructor() { }

  ngOnInit() {
  }

}

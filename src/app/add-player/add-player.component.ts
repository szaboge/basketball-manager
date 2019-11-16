import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService, Player, Team} from '../services/data.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  teams = new BehaviorSubject<Array<Team>>(null);
  fromGroup = new FormGroup({
    select: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required)
  });

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getTeams()
      .subscribe((value: Array<Team>) => {
        this.teams.next(value);
      });
  }

  addPlayer() {
    const player: Player = {name: this.fromGroup.controls.name.value, age: this.fromGroup.controls.age.value};
    const team: string = this.fromGroup.controls.select.value;
    this.dataService.addPlayer(player, team).subscribe((result) => {
      console.log(result);
    }, error => {
      console.error(error);
    });
    this.fromGroup.reset();
  }
}

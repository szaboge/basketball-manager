import { Injectable } from '@angular/core';

export interface Team {
    name: string;
    players: Array<Player>;
}
export interface Player {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  teams: Array<Team> = [
    {
      name: 'First team',
      players: [
        {name: 'Player1', age: 22}, {name: 'Player2', age: 25}
      ]
    },
    {
      name: 'Second team',
      players: []
    }
  ];

  constructor() { }

  addPlayer(player: Player, teamName: string) {
    const dest = this.teams.find((team: Team) => team.name === teamName);
    if (dest) { dest.players.push(player); }
  }
}

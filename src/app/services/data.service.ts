import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
  defaultParams = {
    token: '12345'
  };

  constructor(private httpClient: HttpClient) {
  }

  getTeams(): Observable<any> {
    return this.httpClient.get('http://localhost:7000/api/teams', {params: this.defaultParams});
  }

  addPlayer(player: Player, teamName: string): Observable<any> {
    return this.httpClient.post('http://localhost:7000/api/add-player', {}
      , {
        params: {
          ...this.defaultParams,
          playerName: player.name,
          playerAge: player.age.toString(),
          team: teamName
        }
      });
  }
}

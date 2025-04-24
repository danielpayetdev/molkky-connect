import { Injectable } from '@angular/core';
import { Player } from '../core/bean/player';

@Injectable({
  providedIn: 'root',
})
export class GameConfigService {
  players: Player[] = [];
}

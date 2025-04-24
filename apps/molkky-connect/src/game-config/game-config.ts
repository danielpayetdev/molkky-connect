import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Player } from '../core/bean/player';
import { GameConfigService } from './game-config.service';

@Component({
  selector: 'app-game-config',
  imports: [FormsModule, RouterLink],
  template: `
    <div>
      <h2>Liste des joueurs</h2>
      <ul>
        @for (player of players(); track $index) {
        <li>{{ player.name }}</li>
        }
      </ul>
      <form (ngSubmit)="addPlayer()">
        <label for="playerName">Nom du joueur:</label>
        <input
          #newPlayer
          class="border border-gray-300 rounded-md p-2"
          id="playerName"
          [(ngModel)]="newPlayerName"
          name="playerName"
          required
        />
        <button type="submit" [disabled]="newPlayer.value.trim() === ''">
          Ajouter
        </button>
      </form>
      <a class="cursor-pointer" routerLink="/game" (click)="savePlayers()"
        >Démarrer le jeu</a
      >
    </div>
  `,
})
export class GameConfigComponent {
  private readonly configService = inject(GameConfigService);

  players = signal<Player[]>([
    { id: 1, name: 'Daniel' },
    { id: 2, name: 'Hélène' },
  ]);
  newPlayerName = '';

  addPlayer(): void {
    if (this.newPlayerName.trim()) {
      this.players.update((currentPlayers) => [
        ...currentPlayers,
        { id: currentPlayers.length + 1, name: this.newPlayerName.trim() },
      ]);
      this.newPlayerName = '';
    }
  }

  savePlayers(): void {
    this.configService.players = this.players();
  }
}

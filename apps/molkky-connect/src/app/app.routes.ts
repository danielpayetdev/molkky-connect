import { Route } from '@angular/router';
import { gameGuard } from '../game/game.guard';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/game-config', pathMatch: 'full' },
  {
    path: 'game-config',
    loadComponent: () =>
      import('../game-config/game-config').then((m) => m.GameConfigComponent),
  },
  {
    path: 'game',
    loadComponent: () =>
      import('../game/game').then((m) => m.GameComponent),
    canActivate: [gameGuard],
  },
];

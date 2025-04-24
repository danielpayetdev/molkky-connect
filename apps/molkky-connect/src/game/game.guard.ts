import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { GameConfigService } from '../game-config/game-config.service';

export const gameGuard = () => {
  const gameConfigService = inject(GameConfigService);
  const router = inject(Router);

  if (gameConfigService.players.length >= 2) {
    return true;
  } else {
    router.navigate(['/game-config']);
    return false;
  }
};

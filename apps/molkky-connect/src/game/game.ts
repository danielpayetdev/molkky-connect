import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  template: `
    <div class="flex flex-col items-center justify-center m-8">
      @for(row of [[7, 8, 9], [5, 11,12,6], [3 ,10,4], [1, 2]]; track $index){
      <div>
        @for(quille of row; track $index){
        <button class="border border-gray-300 rounded-md p-2 m-1" (click)="select(quille)">
          {{ quille }}
        </button>
        }
      </div>
      }
    </div>
    toto: {{ selectedQuille() }}
  `,
})
export class GameComponent {
  selectedQuille = signal<number[]>([]);

  select(quille: number) {
    this.selectedQuille.update((current) => {
      if (current.includes(quille)) {
        return current.filter((q) => q !== quille);
      } else {
        return [...current, quille];
      }
    });
  }
}

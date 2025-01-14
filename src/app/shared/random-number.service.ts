import { Injectable } from '@angular/core';

export interface WeightedChanceItem<T = string> {
  chance: number;
  value: T;
}

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { }

  public getRandomValue<T>(items: WeightedChanceItem<T>[]): T {
    const random = this.getRandomIntBetweenInclusive(0, 99);
    console.log('Random Number: ', random);
    // Determine which item corresponds to the random number
    let accumulatedChance = 0;
    for (const item of items) {
      accumulatedChance += item.chance;
      if (random < accumulatedChance) {
        return item.value;
      }
    }
    return items[0].value;
  }

  public getRandomIntBetweenInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

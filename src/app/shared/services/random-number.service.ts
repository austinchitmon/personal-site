import { Injectable } from '@angular/core';

export interface WeightedChanceItem<T = string> {
  weight: number;
  value: T;
}

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {
  public getWeightedRandomItem<T>(items: WeightedChanceItem<T>[]): T {
    const random = this.getRandomIntBetweenInclusive(1, this.getTotalWeight(items.map(item => item.weight)));
    console.log('Random Number: ', random);
    // Determine which item corresponds to the random number
    let accumulatedChance = 0;
    for (const item of items) {
      accumulatedChance += item.weight;
      if (random <= accumulatedChance) {
        return item.value;
      }
    }
    return items[0].value;
  }

  public getRandomIntBetweenInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private getTotalWeight(weights: number[]): number {
    return weights.reduce((total, current) => {
      return total + current;
    }, 0);
  }
}

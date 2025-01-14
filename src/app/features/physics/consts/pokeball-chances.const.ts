import { WeightedChanceItem } from '../../../shared/random-number.service';

export const POKEBALL_SPRITE_CHANCES: WeightedChanceItem[] = [
  {
    chance: 50,
    value: 'img/pokeballs/poke.png'
  },
  {
    chance: 30,
    value: 'img/pokeballs/great.png'
  },
  {
    chance: 19,
    value: 'img/pokeballs/ultra.png'
  },
  {
    chance: 1,
    value: 'img/pokeballs/master.png'
  }
];

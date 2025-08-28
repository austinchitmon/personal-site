import { WeightedChanceItem } from '../../../shared/services/random-number.service';

export const POKEBALL_SPRITE_CHANCES: WeightedChanceItem[] = [
  {
    weight: 50,
    value: 'img/pokeballs/poke.png'
  },
  {
    weight: 30,
    value: 'img/pokeballs/great.png'
  },
  {
    weight: 19,
    value: 'img/pokeballs/ultra.png'
  },
  {
    weight: 1,
    value: 'img/pokeballs/master.png'
  }
];

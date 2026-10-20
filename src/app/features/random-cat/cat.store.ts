import {
  Injectable,
  Signal,
  signal
} from '@angular/core';

@Injectable()
export class CatStore {
  public readonly randomCatUrl: Signal<string>;
  public readonly imageLoading: Signal<boolean>;
  public UWU_DESCRIPTIONS = [
    "OMG! What a little floofball, I'm literally crying uwu",
    "My heart just went full 'splish splash' like omg it's so precious",
    "Is this even legal?! My brain cells are short-circuiting from this cuteness! OwO",
    "Those eyes are like, sparkly magic, my whole day is blessed. Lol.",
    "Warning: Cuteness overload! My soul just yeeted into outer space.",
    "This is like, peak purr-fection, I'm not okay. XD",
    "My brain broke trying to process this much cute. Plz send snacks and hugs.",
    "My daily dose of serotonin just dropped! This cat is literally my spirit animal.",
    "Screaming! Such a tiny, sweet face! Must boop that little snoot!",
    "My day went from 0 to 1000 real quick. So smol, so cute, very wow. UWU"
  ];
  readonly #randomCatUrl = signal<string>('');
  readonly #imageLoading = signal<boolean>(false);

  constructor() {
    this.randomCatUrl = this.#randomCatUrl.asReadonly();
    this.imageLoading = this.#imageLoading.asReadonly();
  }

  public setRandomCatUrl(url: string): void {
    this.#randomCatUrl.set(url);
  }

  public setImageLoading(state: boolean): void {
    this.#imageLoading.set(state);
  }
}

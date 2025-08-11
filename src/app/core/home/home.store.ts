import {
  Injectable,
  signal,
  WritableSignal
} from '@angular/core';

export interface HomeState {
  textColor: WritableSignal<string>;
  colors: WritableSignal<string[]>;
}

@Injectable()
export class HomeStore {
  #state: HomeState = {
    textColor: signal(''),
    colors: signal([
      '#B48',
      '#B4B',
      '#84B',
      '#44B',
      '#48B',
      '#4BB',
      '#4B8',
      '#4B4',
      '#8B4',
      '#BB4',
      '#B84',
      '#B44',
    ])
  };

  public textColor = this.#state.textColor.asReadonly();
  public colors = this.#state.colors.asReadonly();

  public setTextColor(color: string): void {
    this.#state.textColor.set(color);
  }
}

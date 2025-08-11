import {
  computed,
  Injectable
} from '@angular/core';
import {
  of,
  switchMap,
  tap
} from 'rxjs';
import { RandomNumberService } from '../../../shared/random-number.service';
import { CatStore } from '../cat.store';
import { CatApiService } from './cat-api.service';

@Injectable()
export class CatInteractionsService {
  public $randomCatUrl = computed(() => this.store.randomCatUrl());
  public $imageLoading = computed(() => this.store.imageLoading());
  public $uwuDescription = computed(() => {
    // update along with random image
    this.store.randomCatUrl();
    return this.store.UWU_DESCRIPTIONS[
      this.randomService.getRandomIntBetweenInclusive(0, this.store.UWU_DESCRIPTIONS.length - 1)
      ];
  });

  constructor(
    private readonly store: CatStore,
    private readonly api: CatApiService,
    private readonly randomService: RandomNumberService
  ) {}


  public updateRandomCatUrl() {
    of(null).pipe(
      tap(() => this.store.setImageLoading(true)),
      switchMap(() => this.api.getRandomCatImageURL())
    ).subscribe((url) => {
      this.store.setRandomCatUrl(url);
    });
  }

  public imageLoaded() {
    this.store.setImageLoading(false);
  }
}

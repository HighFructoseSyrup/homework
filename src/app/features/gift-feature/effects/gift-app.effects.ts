import { Injectable } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as appActions from '../../../actions/app,.actions';
import * as giftActions from '../actions/gift.actions';

// Convert application actions to my actions, or vice versa
@Injectable()
export class GiftAppEffects {

  addingHadAnError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(giftActions.giftAddedFailure),
      map(err => appActions.applicationError({
        feature: 'gifts',
        message: err.message
      }))
    )
  );

  // If we get applicationStarted -> loadGiftData
  loadGiftData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => giftActions.loadGiftData())
    )
  );


  constructor(private actions$: Actions) { }
}

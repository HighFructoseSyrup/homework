import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GiftDataService } from '../services/gift-data.service';
import * as actions from '../actions/gift.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class GiftEffects {

  // when we get a giftAdded -> (api call) -> (giftAddedSuccess | giftAddedFailure)
  saveGift$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.giftAdded),
      switchMap(originalAction => this.service.addItem(originalAction.payload)
        .pipe(
          map(response => actions.giftAddedSuccessfully({ oldId: originalAction.payload.id, payload: response })),
          catchError((response) => of(actions.giftAddedFailure({ payload: originalAction.payload, message: 'Could Not Add That Gift' })))
        )
      )
    )
  );


  // when we get a loadGiftData ->(api call!) -> (loadGiftDataSucceeded | loadGiftDataFailed)

  loadGiftData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadGiftData),
      switchMap(() => this.service.getGiftData()
        .pipe(
          map(response => actions.loadGiftDataSucceeded({ payload: response }))
        )
      )
    )
  );
  constructor(private service: GiftDataService, private actions$: Actions) { }
}

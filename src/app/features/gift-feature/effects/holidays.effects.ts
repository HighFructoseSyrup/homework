import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from '../actions/holiday.actions';
import { map, switchMap } from 'rxjs/operators';
import { HolidayDataService } from '../services/holiday-data.service';

@Injectable()
export class HolidayEffects {

  loadHolidayData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadHolidayData),
      switchMap(() => this.service.getHolidayData()
        .pipe(
          map(response => actions.loadHolidayDataSucceeded({ payload: response }))
        )
      )
    )
  );
  constructor(private service: HolidayDataService, private actions$: Actions) { }
}

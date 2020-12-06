import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as counterActions from '../actions/counter.actions';
import { tap, map, filter } from 'rxjs/operators';
import { applicationStarted } from '../actions/app,.actions';

@Injectable()
export class CounterEffects {

  // write to localstorage any time they change the count
  // logThemAll$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap(a => console.log(`Got an action of type ${a.type}`))
  //   )
  //   , { dispatch: false });

  countBySet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(counterActions.countBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  );

  // when the application starts, see if there is a value in localStorage for what they want to count by.
  // if there isn't, not do anything..
  // if there is.... dispatch a countBySet with that value.

  loadCountBySet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted), // -> the application started. carry on.
      map(() => localStorage.getItem('by')), // => null || "1" | "3" | "5"
      filter((val) => val !== null), // STAHP! or "1" | "3" | "5"
      map(val => val as string), // we know this is a string, let the compiler know.
      map((val) => +val), // turn "1" | "3" | "5" => 1 | 3 | 5
      map((by) => counterActions.countBySet({ by })) // => dispatch!
    ), { dispatch: true }

  );
  constructor(private actions$: Actions) { }
}

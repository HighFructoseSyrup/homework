import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import * as fromErrors from './errors.reducer';

export interface AppState {
  counter: fromCounter.CounterState;
  errors: fromErrors.ErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer,
  errors: fromErrors.reducer
};

// "Selector Functions"

// 1. Create a feature selector (if you are in a feature, we aren't but we will later)

// 2. Create a selector for each "branch" of your state (each property of the state off the root of the object)
const selectCounterBranch = (state: AppState) => state.counter;
const selectErrorsBranch = (state: AppState) => state.errors;
// 3. Create any "helpers" you might need (optional)

// 4. Create the selectors that your components need.

export const selectHasErrors = createSelector(
  selectErrorsBranch,
  b => b.hasError
);

export const selectErrorMessage = createSelector(
  selectErrorsBranch,
  b => b.message
);


// 4.a. We need one that returns the dang count.

export const selectCounterCount = createSelector(
  selectCounterBranch,
  b => b.count
);

export const selectResetDisabled = createSelector(
  selectCounterCount, // 0
  c => c === 0
);


export const selectCountingBy = createSelector(
  selectCounterBranch, // => { count: 9, by: 1}
  b => b.by
);

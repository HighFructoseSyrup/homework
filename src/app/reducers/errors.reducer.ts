import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/app,.actions';

export interface ErrorState {
  message: string | null;
  hasError: boolean;
}

const initialState: ErrorState = {
  message: null,
  hasError: false
};


const reducerFunction = createReducer(
  initialState,
  on(actions.applicationError, (s, a) => ({ hasError: true, message: a.message })),
  on(actions.clearApplicationError, (s, a) => ({ hasError: false, message: null }))
);

export function reducer(state: ErrorState = initialState, action: Action): ErrorState {
  return reducerFunction(state, action);
}

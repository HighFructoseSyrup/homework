import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  count: number;
  by: number;
}

export const initialState: CounterState = {
  count: 0,
  by: 1
};

const reducerFunction = createReducer(
  initialState,
  on(actions.countReset, () => initialState),
  on(actions.countIncremented, incrementIt),
  on(actions.countDecremented, (s) => ({ ...s, count: s.count - s.by })),
  on(actions.countBySet, (s, a) => ({ ...s, by: a.by }))
);

// reducer(undefined, { type: '@ngrx/store/init'})
export function reducer(state: CounterState = initialState, action: Action): CounterState {
  return reducerFunction(state, action);
}


function incrementIt(state: CounterState): CounterState {
  return { ...state, count: state.count + state.by };
}


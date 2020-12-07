import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/holiday.actions';

export interface HolidayEntity {
  id: string;
  name: string;
}

export interface HolidayState extends EntityState<HolidayEntity> {

}

export const adapter = createEntityAdapter<HolidayEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.loadHolidayDataSucceeded, (state, action) => adapter.setAll(action.payload, state))
);

export function reducer(state: HolidayState = initialState, action: Action): HolidayState {
  return reducerFunction(state, action);
}




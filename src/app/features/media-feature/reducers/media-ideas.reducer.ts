import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/media.actions';

export interface MediaEntity {
  title: string;
  format: string;
  isLoanedOut: string;
  id: string;
}

export interface MediaState extends EntityState<MediaEntity> {

}

export const adapter = createEntityAdapter<MediaEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.mediaAdded, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.mediaUpdateCheckedOut, (state, action) => adapter.setOne(action.payload, state)),
  on(actions.mediaUpdateNotCheckedOut, (state, action) => adapter.setOne(action.payload, state))
);

export function reducer(state: MediaState = initialState, action: Action): MediaState {
  return reducerFunction(state, action);
}




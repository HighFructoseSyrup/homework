import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/gift.actions';

export interface GiftIdeaEntity {
  id: string;
  for: string;
  holiday: string;
  suggestions: string;
}

export interface GiftIdeaState extends EntityState<GiftIdeaEntity> {

}

export const adapter = createEntityAdapter<GiftIdeaEntity>();

const initialState = adapter.getInitialState();
// const initialState: GiftIdeaState = {
//   ids: ['1', '2'],
//   entities: {
//     1: { id: '1', for: 'Sean', holiday: 'Christmas', suggestions: 'A Hat' },
//     2: { id: '2', for: 'Cheryl', holiday: 'Christmas', suggestions: 'Air Fryer' }
//   }
// };

const reducerFunction = createReducer(
  initialState,
  on(actions.giftAdded, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadGiftDataSucceeded, (state, action) => adapter.setAll(action.payload, state)),
  on(actions.giftAddedSuccessfully, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.payload, tempState);
  }),
  on(actions.giftAddedFailure, (state, action) => adapter.removeOne(action.payload.id, state))
);

export function reducer(state: GiftIdeaState = initialState, action: Action): GiftIdeaState {
  return reducerFunction(state, action);
}




import { createAction, props } from '@ngrx/store';
import { GiftCreate } from '../models';
import { GiftIdeaEntity } from '../reducers/gift-ideas.reducer';

let fakeId = 1;


// Initiator
export const giftAdded = createAction(
  '[gift-giving gifts] gift added',
  ({ gift }: { gift: GiftCreate }) => ({
    payload: {
      ...gift,
      id: 'T' + fakeId++
    } as GiftIdeaEntity
  })
);
// success
export const giftAddedSuccessfully = createAction(
  '[gift-giving gifts] gift added successfully',
  props<{ oldId: string, payload: GiftIdeaEntity }>()
);
// failure
export const giftAddedFailure = createAction(
  '[gift-giving gifts] gift added failure',
  props<{ payload: GiftIdeaEntity, message: string }>()
);

// Initiator
export const loadGiftData = createAction(
  '[gift-giving gifts] load gift data'
);
// Success
export const loadGiftDataSucceeded = createAction(
  '[gift-giving gifts] load gift data succeeded',
  props<{ payload: GiftIdeaEntity[] }>()
);
// Failure
export const loadGiftDataFailed = createAction(
  '[gift-giving gifts] load gift data failed',
  props<{ error: string }>()
);

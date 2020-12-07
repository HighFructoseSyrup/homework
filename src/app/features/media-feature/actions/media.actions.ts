import { createAction } from '@ngrx/store';
import { MediaCreate, MediaItem } from '../models';
import { MediaEntity } from '../reducers/media-ideas.reducer';

let fakeId = 0;
// Initiator
export const mediaAdded = createAction(
  '[media] media added',
  ({ media }: { media: MediaCreate }) => ({
    payload: {
      ...media,
      id: 'T' + fakeId++
    } as MediaEntity
  })
);

export const mediaUpdateCheckedOut = createAction(
  '[media] media checked out update',
  (media: MediaItem) => {
    media.isLoanedOut = 'Yes';
      return ({
      payload: {
        ...media
      } as MediaEntity
    });
  }
);

export const mediaUpdateNotCheckedOut = createAction(
  '[media] media not checked out update',
  (media: MediaItem) => {
    media.isLoanedOut = 'No';
      return ({
      payload: {
        ...media
      } as MediaEntity
    });
  }
);

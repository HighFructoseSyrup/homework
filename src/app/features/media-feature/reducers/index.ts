import { ActionReducerMap, createFeatureSelector, createSelector, select } from '@ngrx/store';
import {  MediaItem } from '../models';
import * as fromMedia from './media-ideas.reducer';
export const featureName = 'mediaFeature';

export interface MediaFeatureState {
  media: fromMedia.MediaState;
}

export const reducers: ActionReducerMap<MediaFeatureState> = {
  media: fromMedia.reducer
};


const selectMediaFeature = createFeatureSelector<MediaFeatureState>(featureName);

const selectMediaBranch = createSelector(
  selectMediaFeature,
  f => f.media
);

const { selectAll: selectMediaArray } = fromMedia.adapter.getSelectors(selectMediaBranch);

export const selectMediaItems = createSelector(
  selectMediaArray,
  (items) => items.map(item => {
    return {
      ...item
    };
  }) as MediaItem[]
);


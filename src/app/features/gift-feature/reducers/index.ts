import { ActionReducerMap, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { GiftItem } from '../models';
import * as fromGiftIdeas from './gift-ideas.reducer';
export const featureName = 'giftsFeature';

export interface GiftFeatureState {
  giftIdeas: fromGiftIdeas.GiftIdeaState;
}

export const reducers: ActionReducerMap<GiftFeatureState> = {
  giftIdeas: fromGiftIdeas.reducer
};

// 1. Feature Reducer

const selectGiftFeature = createFeatureSelector<GiftFeatureState>(featureName);

// 2. One per "branch" of the state

const selectGiftIdeasBranch = createSelector(
  selectGiftFeature,
  f => f.giftIdeas
);


// 3. "Helpers" (optional)

const { selectAll: selectAllGiftArray } = fromGiftIdeas.adapter.getSelectors(selectGiftIdeasBranch);
// 4. What the components need

// TODO: ./models/GiftItem[]

export const selectGiftItems = createSelector(
  selectAllGiftArray,
  (items) => items.map(item => {
    return {
      ...item,
      isTemp: item.id.toString().startsWith('T')
    };
  }) as GiftItem[]
);

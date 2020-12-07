import { ActionReducerMap, createFeatureSelector, createSelector, select } from '@ngrx/store';
import { GiftItem, HolidayItem } from '../models';
import * as fromGiftIdeas from './gift-ideas.reducer';
import * as fromHolidays  from './holidays.reducer';
export const featureName = 'giftsFeature';


export interface GiftFeatureState {
  giftIdeas: fromGiftIdeas.GiftIdeaState;
  holidays: fromHolidays.HolidayState;
}

export const reducers: ActionReducerMap<GiftFeatureState> = {
  giftIdeas: fromGiftIdeas.reducer,
  holidays: fromHolidays.reducer
};

// 1. Feature Reducer

const selectGiftFeature = createFeatureSelector<GiftFeatureState>(featureName);

// 2. One per "branch" of the state

const selectGiftIdeasBranch = createSelector(
  selectGiftFeature,
  f => f.giftIdeas
);

const selectHolidaysBranch = createSelector(
  selectGiftFeature,
  f => f.holidays
);



// 3. "Helpers" (optional)

const { selectAll: selectAllGiftArray } = fromGiftIdeas.adapter.getSelectors(selectGiftIdeasBranch);

const { selectAll: selectAllHolidaysArray } = fromHolidays.adapter.getSelectors(selectHolidaysBranch);

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

export const selectHolidays = createSelector(
  selectAllHolidaysArray,
  (items) => items.map(item => {
    return {
      ...item
    };
  }) as HolidayItem[]
);



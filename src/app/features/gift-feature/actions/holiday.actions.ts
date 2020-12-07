import { createAction, props } from '@ngrx/store';
import { HolidayEntity } from '../reducers/holidays.reducer';


// Initiator
export const loadHolidayData = createAction(
  '[holiday] load holiday data'
);
// Success
export const loadHolidayDataSucceeded = createAction(
  '[holiday] load holiday data succeeded',
  props<{ payload: HolidayEntity[] }>()
);
// Failure
export const loadHolidayDataFailed = createAction(
  '[holiday] load holiday data failed',
  props<{ error: string }>()
);

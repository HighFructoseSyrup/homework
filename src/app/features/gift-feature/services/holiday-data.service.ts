import { BehaviorSubject, Observable, of } from 'rxjs';
import { GiftCreate, GiftItem } from '../models';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'; // ONLY IMPORT THIS ONE EVER EVER EVER
import { GiftIdeaEntity } from '../reducers/gift-ideas.reducer';
import { HolidayEntity } from '../reducers/holidays.reducer';
@Injectable()
export class HolidayDataService {


  readonly baseUrl = environment.giftApiUrl;

  constructor(private client: HttpClient) { }

  // a way to get the data.
  getHolidayData(): Observable<HolidayEntity[]> {
    console.log('i should be making this call');
    return this.client.get<{ data: HolidayEntity[] }>(this.baseUrl + 'holidays')
      .pipe(
        map(response => response.data)
      );
  }
}

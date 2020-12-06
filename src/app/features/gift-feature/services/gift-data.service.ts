import { BehaviorSubject, Observable, of } from 'rxjs';
import { GiftCreate, GiftItem } from '../models';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'; // ONLY IMPORT THIS ONE EVER EVER EVER
import { GiftIdeaEntity } from '../reducers/gift-ideas.reducer';
@Injectable()
export class GiftDataService {


  readonly baseUrl = environment.giftApiUrl;

  constructor(private client: HttpClient) { }
  getCountOfGiftsToBuy(): Observable<number> {
    return of(13); // fake!
  }


  // a way to get the data.
  getGiftData(): Observable<GiftIdeaEntity[]> {
    return this.client.get<{ data: GiftIdeaEntity[] }>(this.baseUrl + 'gifts')
      .pipe(
        map(response => response.data)
      );
  }
  // a way to add an item
  addItem(giftItem: GiftCreate): Observable<GiftIdeaEntity> {
    return this.client.post<GiftIdeaEntity>(this.baseUrl + 'gifts', giftItem);
  }
  // a way to get a summary (how many gifts do we have to buy yet?)
}

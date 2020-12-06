import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { giftAdded } from '../../actions/gift.actions';
import { GiftCreate, GiftItem } from '../../models';
import { GiftFeatureState, selectGiftItems } from '../../reducers';
import { GiftIdeaState } from '../../reducers/gift-ideas.reducer';
import { GiftDataService } from '../../services/gift-data.service';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.scss']
})
export class GiftGivingComponent implements OnInit {

  data$!: Observable<GiftItem[]>;
  constructor(private store: Store<GiftFeatureState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(
      select(selectGiftItems)
    );
  }

  onItemAdded(gift: GiftCreate): void {
    this.store.dispatch(giftAdded({ gift }));
  }

}

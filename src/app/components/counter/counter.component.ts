import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCounterCount, selectResetDisabled } from 'src/app/reducers';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$!: Observable<number>;
  resetDisabled$!: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store
      .pipe(
        select(selectCounterCount)
      );
    this.resetDisabled$ = this.store
      .pipe(
        select(selectResetDisabled)
      );
  }

  increment(): void {
    this.store.dispatch(actions.countIncremented());
  }

  decrement(): void {
    this.store.dispatch(actions.countDecremented());
  }

  reset(): void {
    this.store.dispatch(actions.countReset());
  }


}



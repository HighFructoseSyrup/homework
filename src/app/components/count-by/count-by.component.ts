import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCountingBy } from 'src/app/reducers';
import { countBySet } from '../../actions/counter.actions';
@Component({
  selector: 'app-count-by',
  templateUrl: './count-by.component.html',
  styleUrls: ['./count-by.component.scss']
})
export class CountByComponent implements OnInit {

  countingBy$!: Observable<number>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.countingBy$ = this.store
      .pipe(
        select(selectCountingBy)
      );
  }

  setCountBy(by: number): void {
    this.store.dispatch(countBySet({ by }));
  }
}

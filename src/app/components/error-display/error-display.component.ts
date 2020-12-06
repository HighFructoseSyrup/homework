import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearApplicationError } from 'src/app/actions/app,.actions';
import { AppState, selectErrorMessage, selectHasErrors } from 'src/app/reducers';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {

  hasError$!: Observable<boolean>;
  message$!: Observable<string | null>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.hasError$ = this.store.pipe(
      select(selectHasErrors)
    );

    this.message$ = this.store.pipe(
      select(selectErrorMessage)
    );
  }

  clearError(): void {
    this.store.dispatch(clearApplicationError());
  }

}

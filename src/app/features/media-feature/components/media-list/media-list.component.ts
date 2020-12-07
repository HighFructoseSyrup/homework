import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { mediaUpdateCheckedOut, mediaUpdateNotCheckedOut } from '../../actions/media.actions';
import { MediaItem } from '../../models';
import { MediaFeatureState } from '../../reducers';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {

  @Input() items: MediaItem[] | null = [];
  constructor(private store: Store<MediaFeatureState>) { }

  ngOnInit(): void {

  }

  handleCheckedOut(event: Event, id: number) : void {
    let element = event.target as HTMLInputElement;
    let value = element.checked ? "Yes" : "No";
    if(this.items) {
      let item = (this.items[id]) as MediaItem;
      if(item.isLoanedOut !== value) {
        if(value === "Yes")
          this.store.dispatch(mediaUpdateCheckedOut(item));
        else
          this.store.dispatch(mediaUpdateNotCheckedOut(item));
      }
    }
    
  }

}

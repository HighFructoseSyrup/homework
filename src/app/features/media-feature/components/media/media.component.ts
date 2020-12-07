import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mediaAdded } from '../../actions/media.actions';
import { MediaItem } from '../../models';
import { MediaFeatureState, selectMediaItems } from '../../reducers';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  data$!: Observable<MediaItem[]>;
  constructor(private store: Store<MediaFeatureState>) { }

  ngOnInit(): void {
    this.data$ = this.store.pipe(
      select(selectMediaItems)
    );
  }

  onItemAdded(media: MediaItem): void {
    this.store.dispatch(mediaAdded({ media }));
  }

}

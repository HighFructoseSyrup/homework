import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaEntryComponent } from './components/media-entry/media-entry.component';
import { MediaFeatureComponent } from './media-feature.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaComponent } from './components/media/media.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { MediaListComponent } from './components/media-list/media-list.component';

@NgModule({
  declarations: [
    MediaEntryComponent,
    MediaFeatureComponent,
    MediaComponent,
    MediaListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, reducers),
  ],
  exports: [
    MediaFeatureComponent
  ],
})
export class MediaFeatureModule { }

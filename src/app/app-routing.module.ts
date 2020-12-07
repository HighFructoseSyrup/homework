import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiftFeatureComponent } from './features/gift-feature/gift-feature.component';
import { MediaFeatureComponent } from './features/media-feature/media-feature.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'gifts',
    component: GiftFeatureComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'media',
    component: MediaFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

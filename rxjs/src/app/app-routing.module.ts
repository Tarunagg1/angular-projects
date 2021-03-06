import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatMergeComponent } from './components/observable/concat-merge/concat-merge.component';
import { CustomComponent } from './components/observable/custom/custom.component';
import { DebouncetimeComponent } from './components/observable/debouncetime/debouncetime.component';
import { FilterComponent } from './components/observable/filter/filter.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { ListComponent } from './components/observable/list/list.component';
import { MapComponent } from './components/observable/map/map.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { PluckComponent } from './components/observable/pluck/pluck.component';
import { ReplaySubjectComponent } from './components/observable/replay-subject/replay-subject.component';
import { RetryComponent } from './components/observable/retry/retry.component';
import { SubjectComponent } from './components/observable/subject/subject.component';
import { SwitchMapComponent } from './components/observable/switch-map/switch-map.component';
import { TakeComponent } from './components/observable/take/take.component';
import { TapComponent } from './components/observable/tap/tap.component';
import { ToarrayComponent } from './components/observable/toarray/toarray.component';
import { PromiseComponent } from './components/promise/promise.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent, pathMatch: 'full' },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'toarray', component: ToarrayComponent },
      { path: 'custom-observable', component: CustomComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
      { path: 'fliter', component: FilterComponent },
      { path: 'tap', component: TapComponent },
      { path: 'take', component: TakeComponent },
      { path: 'retery', component: RetryComponent },
      { path: 'debounce', component: DebouncetimeComponent },
      { path: 'subject', component: SubjectComponent },
      { path: 'replysubject', component:ReplaySubjectComponent },
      { path: 'concatmerge', component:ConcatMergeComponent },
      { path: 'switchmap', component:SwitchMapComponent },

    ],
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

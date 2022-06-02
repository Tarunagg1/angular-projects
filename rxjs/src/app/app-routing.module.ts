import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { ListComponent } from './components/observable/list/list.component';
import { ObservableComponent } from './components/observable/observable.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
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

    ],
  },
  { path: '**', redirectTo: 'promise' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

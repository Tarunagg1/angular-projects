import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ObservableComponent } from './components/observable/observable.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { ListComponent } from './components/observable/list/list.component';
import { IntervalComponent } from './components/observable/interval/interval.component';
import { OfFromComponent } from './components/observable/of-from/of-from.component';
import { ToarrayComponent } from './components/observable/toarray/toarray.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToarrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

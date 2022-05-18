import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinDetailComponent } from './components/coin-detail/coin-detail.component';
import { CoinListComponent } from './components/coin-list/coin-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'coinlist', pathMatch: 'full' },
  { path: 'coinlist', component: CoinListComponent, pathMatch: 'full' },
  { path: 'coindetail/:id', component: CoinDetailComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

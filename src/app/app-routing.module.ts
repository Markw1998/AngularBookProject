import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component'
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path: 'home' , component: AppComponent},
  {path: 'favourites' , component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { SearchComponent } from './components/search/search.component';


export const routes: Routes = [
  {path: 'search' , component: SearchComponent},
  {path: 'favourites' , component: FavouritesComponent}
];
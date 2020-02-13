 import{ Routes  } from '@angular/router';  //import to   module of  angular 
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';



export const ROUTES: Routes =[  //create a array of routes
    { path: 'home', component : HomeComponent },
    { path: 'search', component :SearchComponent },
    { path: 'artist/:id', component : ArtistaComponent },
    { path: '', pathMatch:'full',redirectTo:'home' },
    { path: '**', pathMatch:'full',redirectTo:'home' }

];

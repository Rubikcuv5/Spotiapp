import { Component} from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  
})
export class SearchComponent  {
   artista: any[]= [];
   loading:boolean ;
  constructor(private spotify: SpotifyService) {
    }

  buscar(termino:string){
    this.loading = true;
    console.log(termino);
    this.spotify.getArtists(termino).subscribe((data:any)=>{
      console.log(data);
    this.artista  = data;
      this.loading=false;
     });
  }

}

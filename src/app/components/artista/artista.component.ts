import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
   alredy: boolean ;
    artista:any ={};
    topTracks : any [] =[];
  constructor(private router: ActivatedRoute,private spotifyService:SpotifyService) { 
    this.alredy=true;
    this.router.params.subscribe(params=>{ this.getArtista(params['id']);
    this.getTopTracks(params['id']); 
  });
    
   
  }
  getArtista(id:string){
   this.spotifyService.getArtist(id).subscribe(data=>{console.log(data);
    this.artista =data;
   this.alredy=false;
  });
 
  }
  getTopTracks(id: string){
     this.spotifyService.getNewTracks(id).subscribe(data => {
       this.topTracks = data;
      console.log(data);
      });
  }
  
  ngOnInit() {
  }

}

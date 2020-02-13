import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
 nuevasCanciones:any[] =[];
 loading: boolean;
 error:boolean;
 mensaje:string;
  constructor(private spotify:SpotifyService){
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) =>{
      console.log(data);

      this.nuevasCanciones = data;
      this.loading = false;
    },(errorService)=>{this.error=true;
    console.log(errorService);
    this.mensaje=errorService.error.error.message;
    this.loading=false;
    });
  }
 
     
  ngOnInit() {
  }

}

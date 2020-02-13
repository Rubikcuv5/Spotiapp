import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map } from 'rxjs/operators';
@Injectable({//
  providedIn: 'root'
})
export class SpotifyService {
  //Es necesario generar un token cada hora
     token ='BQAIOsxJLMesRG22-CPYCnE6Sh7kUP0Lv550NRqXpYdQbmbUKxjJTnDlQJWBOsjc8UshBiwoJK2R75jMUQVKPYPM-5n7p0P9OlQFwQ57egbxwgmIEkr-3WyrdpvO2FrgijXOItb8FLP6WFWwx2caiu4ZEeP3XwntPQk';
     
  constructor(private http:HttpClient) {
    console.log("Spotify service  Listo");
   }
   
   getQuery(termino:string){
     const url =`https://api.spotify.com/v1/${termino}`;
     const  headers = new HttpHeaders({
      'Authorization': 'Bearer '+ this.token});
    return this.http.get(url,{headers});

   }
  getNewReleases(){

  return this.getQuery('browse/new-releases?limit=20')
  .pipe(map(data =>data['albums'].items));
 }
  getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data =>data['artists'].items));
    }
    getArtist(id:string){
      return this.getQuery(`artists/${id}`);
     // .pipe(map(data =>console.log(data)));
      }
      getNewTracks(id:string){
        return this.getQuery(`artists/${id}/top-tracks?country=MX`)
        .pipe(map(data =>data['tracks']));
        }
  }


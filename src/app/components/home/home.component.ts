import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any []= [];

  constructor(private http: HttpClient, private spotify: SpotifyService) {

    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe(data =>{
      console.log(data)
    })*/
    this.spotify.getNewReleases()
    .subscribe((data: any) =>{
      //console.log(data.albums.items);
      this.newSongs = data;

    })
   }

  ngOnInit(): void {
  }

}

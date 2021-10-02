import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery (query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers= new HttpHeaders({
      'Authorization': 'Bearer BQD6KPNjg4HGbDa1dpkSo9NCGZX9Ckuj462lPgTnwN47L9-EO2DhTc__IgM9A-HPdrbLTMMxJZexP_UrLWOA9lRFTBh9nUvlqQaS1uAXz-WVa_919psx-KzcwMxfM-zFLFrd2hI                             '
    });
    return this.http.get(url,{headers})
  }

  getNewReleases () {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data=> data['albums'].items));

    /*const headers= new HttpHeaders({
      'Authorization': 'Bearer BQBHvuKpdTTi4LZMqBDHwoQs-c9_K5HengTl7lUtoDzhQR6-XR2ljspB2Tr2i4DmdzlPGsNZhcuepiDXBGM'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    .pipe(map(data=>{
      return data['albums'].items
    }))*/
    
  }

  getArtista (termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
    .pipe(map(data=> data['artists'].items));

    /*const headers= new HttpHeaders({
      'Authorization': 'Bearer BQD4BTaijrIChaapz3xDMPm9W_xEugO__rnMoOXhOSNyeNlguPYvEn0qMEnj69r-PeITFgxVhR8glJkBZZCnGn2N52BZGt6oPKWZf_UWpdGrvEfoKs0LhAFuTDtXSfTL1Dv_0uw'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, {headers})
    .pipe(map(data =>{
      return data['artists'].items
    }))*/

  }


}

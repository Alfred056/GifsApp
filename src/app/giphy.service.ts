import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey = 'nd4KKCOkO0UXrxzXa5WpYiZi1kFqF0zc';  
  private apiUrl = 'https://api.giphy.com/v1/gifs/search';

  constructor(private http: HttpClient) { }

  searchGifs(query: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '16');  

    return this.http.get<any>(this.apiUrl, { params });
  }
}

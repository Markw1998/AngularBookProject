import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleBookResponse } from 'src/GoogleBookResponse';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApiService {
  
  private _siteURL = "https://www.googleapis.com/books/v1/volumes?q=";
  private _apiKey = "&key=AIzaSyBhgSb1L8NsvpCmFGOKepxeiIbjIldjZPk";

  constructor(private _http : HttpClient) { }

  getBookData(bookName): Observable<GoogleBookResponse> {
    return this._http.get<GoogleBookResponse>(this._siteURL+bookName+this._apiKey).pipe(tap(data => console.log('All: ' +JSON.stringify(data))));
    
  }
}

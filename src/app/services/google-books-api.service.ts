import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GoogleBookResponse } from 'src/GoogleBookResponse';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksApiService {

  private _siteURL = "https://www.googleapis.com/books/v1/volumes?q=";
  private _apiKey = "&key=AIzaSyBhgSb1L8NsvpCmFGOKepxeiIbjIldjZPk";


  bookDataCollection: AngularFirestoreCollection<GoogleBookResponse>;

  allBookData: GoogleBookResponse[];
  firestore: AngularFirestore;
  bookData: Observable<GoogleBookResponse[]>;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    this.bookDataCollection = _afs.collection<GoogleBookResponse>("books_data");
  }


  addBookData(book: GoogleBookResponse): void {
    this.bookDataCollection.add(JSON.parse(JSON.stringify(book)));
  }

  addTheBook(selectedBook: GoogleBookResponse): void {
    this.bookDataCollection.add(selectedBook);

    console.log(selectedBook);
  }

  getBookData(bookName): Observable<GoogleBookResponse> {
    return this._http.get<GoogleBookResponse>(this._siteURL + bookName + this._apiKey).pipe(tap(data => console.log('All: ' + JSON.stringify(data))));
  }

  getAllBooks(): Observable<GoogleBookResponse[]> {

  this.bookData = this.bookDataCollection.valueChanges();
   
   return this.bookData;
  
  }
}

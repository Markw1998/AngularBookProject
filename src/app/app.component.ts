import { Component } from '@angular/core';
import { GoogleBooksApiService } from './services/google-books-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleBooksApiService]
})
export class AppComponent {

  // Error Message Declaration
  errorMessage: any;
  bookData : any;


  constructor(private _googleBookAPIService: GoogleBooksApiService){
  }
  
  // 
  getBookDetails(bookName: string): boolean {

    this._googleBookAPIService.getBookData(bookName).subscribe(bookData => {
      this.bookData = bookData;
    },
      error => this.errorMessage = <any>error);
    return false;
  }
}

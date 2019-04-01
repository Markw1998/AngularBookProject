import { Component } from '@angular/core';
import { GoogleBooksApiService } from './services/google-books-api.service';
import { GoogleBookResponse } from 'src/GoogleBookResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoogleBooksApiService]
})
export class AppComponent {

  // Error Message Declaration
  errorMessage: any;
  bookData : GoogleBookResponse;


  constructor(private _googleBookAPIService: GoogleBooksApiService){
  }
  
  // 
  getBookDetails(bookName: string): boolean { 

    this._googleBookAPIService.getBookData(bookName).subscribe(bookData => {
      this.bookData = bookData;
      console.log("AppComp: BookData:"+JSON.stringify(bookData.items[2].volumeInfo));
    },
      error => this.errorMessage = <any>error);
    return false;
  }
}

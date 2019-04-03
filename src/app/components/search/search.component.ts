import { Component, OnInit, Input } from '@angular/core';
import { GoogleBookResponse } from 'src/GoogleBookResponse';
import { GoogleBooksApiService } from 'src/app/services/google-books-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GoogleBooksApiService]
})

export class SearchComponent implements OnInit {


  bookData: GoogleBookResponse;
  errorMessage: any;

  constructor(private _googleBookAPIService: GoogleBooksApiService) { }

  ngOnInit() {
  }

  getBookDetails(bookName: string): boolean { 

    this._googleBookAPIService.getBookData(bookName).subscribe(bookData => {
      this.bookData = bookData;
      console.log("AppComp: BookData:"+JSON.stringify(bookData.items[2].volumeInfo));
    },
      error => this.errorMessage = <any>error);
    return false;
  }

  
}

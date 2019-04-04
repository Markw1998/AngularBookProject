import { Component, OnInit, Input } from '@angular/core';
import { GoogleBookResponse } from 'src/GoogleBookResponse';
import { GoogleBooksApiService } from 'src/app/services/google-books-api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

  @Input() books: GoogleBookResponse;

  selectedBook: any;

  constructor(private _googleBookService: GoogleBooksApiService) {
  }

  ngOnInit() {
  }

  getBookIndex(int: number) {
    this.selectedBook = this.books.items[int];
    this._googleBookService.addTheBook(this.selectedBook);

  }
}

import { Component, OnInit, Input } from '@angular/core';
import { GoogleBooksApiService } from 'src/app/services/google-books-api.service';
import { GoogleBookResponse } from 'src/GoogleBookResponse';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  books: any;

  constructor(private _service: GoogleBooksApiService) {
   }

  ngOnInit() {
    
    this._service.getAllBooks().subscribe(data => {this.books = data})
    console.log(this.books);
  }


}

import { Component, OnInit } from '@angular/core';
import {Book} from '../../../models/book';
import {BookService} from '../../../services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {

  book: Book;

  constructor(
    private route: ActivatedRoute,
    private booksService: BookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params.id;
    this.booksService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}

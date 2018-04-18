import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/observable';
import { BookState } from '../../core/store/books/book/state';
import * as bookSelect from '../../core/store/books/selector';
import { Book } from '../../core/store/books/book/model';
import * as bookActions from '../../core/store/books/book/actions';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<BookState>) {

  }

  ngOnInit() {
    this.books$ = this.store.pipe(select(bookSelect.getBooks));
    this.store.pipe(select(bookSelect.getBook('1'))).subscribe(r => {
      console.log(r);
    });
  }

  add(book) {
    this.store.dispatch(new bookActions.Add(book));
  }

  remove(book) {
    this.store.dispatch(new bookActions.Remove(book));
  }

  removeAll() {
    this.store.dispatch(new bookActions.RemoveAll());
  }
}

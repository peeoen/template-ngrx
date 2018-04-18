import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book/state';

export const getBookState = createFeatureSelector<BookState>('bookState');

export const getBooks = createSelector(
    getBookState,
    (state: BookState) => state.books
);


export const getBook = isbn => createSelector(
    getBookState,
    (state: BookState) => {
        console.log(state);
        return state.books.filter(x => x.isbn === isbn);
    }
);

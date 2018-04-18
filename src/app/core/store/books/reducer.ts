import { Book } from './book/model';
import { BookState } from './book/state';
import { BookAcionsUnion, BookActionTypes } from './book/actions';
import { initBook } from './initial';

export const initialState: BookState = { books: initBook };

export function reducer(state = initialState, action: BookAcionsUnion): BookState {
  switch (action.type) {
    case BookActionTypes.ADD: {
      const book = state.books.find(x => x === action.payload);
      if (book) {
        book.unit += 1;
      }
      return { books : state.books };
    }
    case BookActionTypes.REMOVE: {
      const book = state.books.find(x => x === action.payload);
      if (book) {
        book.unit -= 1;
      }
      return { books : state.books };
    }
    case BookActionTypes.REMOVE_ALL: {
      state.books.splice(0, state.books.length);
      return { books : state.books };
    }
    default: {
      return state;
    }
  }
}


// import { Book } from './book/model';
// import { BookState } from './book/state';
// import { BookAcionsUnion, BookActionTypes } from './book/actions';
// import { initBook } from './initial';

// export const initialState: BookState = { books: initBook };

// export function reducer(state = initialState, action: BookAcionsUnion): BookState {
//   switch (action.type) {
//     case BookActionTypes.ADD: {
//       const book = state.books.find(x => x === action.payload);
//       if (book) {
//         book.unit += 1;
//       }
//       return state;
//     }
//     case BookActionTypes.REMOVE: {
//       const book = state.books.find(x => x === action.payload);
//       if (book) {
//         book.unit -= 1;
//       }
//       return state;
//     }
//     case BookActionTypes.REMOVE_ALL: {
//       state.books.splice(0, state.books.length);
//       return state;
//     }
//     default: {
//       return state;
//     }
//   }
// }

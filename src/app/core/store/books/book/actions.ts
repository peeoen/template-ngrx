import { Action } from '@ngrx/store';
import { Book } from './model';

export enum BookActionTypes {
    ADD = '[Book] Add',
    REMOVE = '[Book] Remove',
    REMOVE_ALL = '[Book] RemoveAll'
}

export class Add implements Action {
    readonly type = BookActionTypes.ADD;
    constructor(public payload: Book) {}
}

export class Remove implements Action {
    readonly type = BookActionTypes.REMOVE;
    constructor(public payload: Book) {}
}

export class RemoveAll implements Action {
    readonly type = BookActionTypes.REMOVE_ALL;


}

export type BookAcionsUnion = | Add
    | Remove
    | RemoveAll;

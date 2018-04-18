import { StoreModule, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { NgModule } from '@angular/core';
import * as bookReducer from './books/reducer';
import { AppState } from './app.state';

export const reducers: ActionReducerMap<AppState> = {
    bookState: bookReducer.reducer
};

@NgModule({
    imports: [
        StoreModule.forRoot(reducers)
    ]
})
export class FeatureModule { }

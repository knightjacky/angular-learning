import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map, catchError, tap, withLatestFrom, switchMap } from 'rxjs/operators';
import * as usersActions from './actions';
import { of } from 'rxjs';


@Injectable()

export class UserEffects {
    constructor(private actions$: Actions, private http: HttpClient) {}

    // @Effect() name$: Observable<Action> = this.actions$.ofType('ACTIONTYPE');

    @Effect() LoadUsers$ = this.actions$.pipe(
        ofType(usersActions.LOAD_USERS),
        mergeMap((action: any) => this.http.get('https://reqres.in/api/users?page=2')),
        map( (result: any) => { 
            return new usersActions.LoadUsersSuccess(result)}),
        catchError(error => of(new usersActions.LoadUsersFail(error))),
    );
}

import { Action } from '@ngrx/store';

// Load Users
export const LOAD_USERS = 'Load Users';
export const LOAD_USERS_FAIL = 'Load Users Fail';
export const LOAD_USERS_SUCCESS = 'Load Users Success';


export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;
    constructor (public payload: any){}
}

export class LoadUsersSuccess implements Action {
    readonly type = LOAD_USERS_SUCCESS;
    constructor (public payload: Object){
        console.log('payload', payload);
    }
}

// Action Types
export type UsersAction = LoadUsers | LoadUsersFail | LoadUsersSuccess;
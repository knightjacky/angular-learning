import { UserState } from './reducer';
import { Action } from '@ngrx/store';
import * as usersActions from './actions';

export interface UserState {
    entities: Object;
    loading: boolean,
    loaded: boolean
};

const initialState: UserState = {
    entities: [],
    loading: false,
    loaded: false        
};

export function userReducer(state = initialState, action: usersActions.UsersAction ): UserState {
    
    switch (action.type) {
        case usersActions.LOAD_USERS: {
            return {
                ...state,
                loading: true,
                loaded: false 
            };
        }

        case usersActions.LOAD_USERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false 
            };
        }

        case usersActions.LOAD_USERS_SUCCESS: {
            return {
                ...state,
                entities: action.payload,
                loading: false,
                loaded: true 
            };
        }

        default: {
            return state;
        }
    }
}

export const getUsersLoading = (state: UserState) => state.loading;
export const getUsersLoaded = (state: UserState) => state.loaded;
export const getUsers = (state: UserState) => state.entities;

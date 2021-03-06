import { withLatestFrom } from 'rxjs/operators';
import * as usersActions from './actions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as userReducer from './reducer';

@Component({
  selector: 'app-six-page',
  templateUrl: './six-page.component.html',
  styleUrls: ['./six-page.component.css']
})
export class SixPageComponent implements OnInit {
 users$: Observable<any>;
localUsers: any;
local: any;
  constructor(private store: Store < userReducer.UserState >) { }

  ngOnInit() {
    this.store.dispatch(new usersActions.LoadUsers());
    this.store.select(store => store.userReducer.entities)
    .subscribe(state => {
       this.users$ = state.data
    });
  }

  editUser(){
 
  }

  deleteUser(){

  }

  createUser(){

  }
}

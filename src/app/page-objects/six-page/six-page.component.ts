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
    this.users$ = this.store.select(store => store.entities);
    console.log('users list:',this.users$);
    // this.store.select<any>('entities').subscribe(state => {
    //   this.users$ = state,
    //   console.log('state',state,'users',this.users$)
    // });
  }

  editUser(){
 
  }

  deleteUser(){

  }

  createUser(){

  }
}

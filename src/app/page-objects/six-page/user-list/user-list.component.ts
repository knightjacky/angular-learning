import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input () users: [];
  @Output() edited = new EventEmitter ();
  @Output () deleted =  new EventEmitter ();
  @Output () created = new EventEmitter ();

  constructor() { }

  ngOnInit() {
  }

  callEdited(id: Number){
    this.edited.emit(id);
  }

  callDeleted(id: Number){
    this.deleted.emit(id);
  }

  callCreated(){
    this.created.emit();
  }
}

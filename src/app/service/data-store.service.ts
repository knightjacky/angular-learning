import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  public toDoList = [];
  public todoListObservable = new EventEmitter();
  constructor() { }

  getData(){
    return ['cook food', 'wash dishes', 'clean floor', 'mop floor', 'wash clothes', 'iron clothes'];
  }

  storeItem(item){
    this.toDoList = item;
    console.log('service got data, emitting...')
    this.todoListObservable.emit(this.toDoList);
  }
}

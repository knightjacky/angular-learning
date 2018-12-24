import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  public toDoObjectList = [
    this.createTodoObject('cook food',1), 
    this.createTodoObject('wash dishes',2),
    this.createTodoObject('clean floor',3),
    this.createTodoObject('mop floor',4),
    this.createTodoObject('wash clothes',5),
    this.createTodoObject('iron clothes',6)
  ];
  public todoListObservable = new EventEmitter();

  constructor(private http: HttpClient) { }

  createTodoObject (item: string = '', id: number = Date.now(), flag: boolean = false){
    return {id, item, flag}
  }

  updateObjectService(item: string){
    if (item === '' || item === null){return;}
    this.toDoObjectList.push(this.createTodoObject(item));
  }

  removeObjectService(idNumber: number){
    this.toDoObjectList = this.toDoObjectList.filter(object => object.id !== idNumber);
  }

  strikeItemService(idNumber: number){
    this.toDoObjectList.filter(object => {
      if(object.id === idNumber){
        object.flag = true;
      }
    })
  }

  setFlagOffService(idNumber: number){
    this.toDoObjectList.filter(object => {
      if(object.id === idNumber){
        object.flag = false;
      }
    })
  }

  changeTitleStyleService(titleStyle: boolean){
    if (titleStyle === false){
      return titleStyle = true;
    }
    return titleStyle = false;
  }

  getUsers(){
    return this.http.get('https://reqres.in/api/users');
  }
}

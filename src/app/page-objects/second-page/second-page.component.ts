import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  toDoList = [
    this.createTodoObject('cook food'), 
    this.createTodoObject('wash dishes'),
    this.createTodoObject('clean floor'),
    this.createTodoObject('mop floor'),
    this.createTodoObject('wash clothes'),
    this.createTodoObject('iron clothes')
  ];
  constructor() { }

  ngOnInit() {
    console.log('todo list content', this.toDoList);
  }

  createTodoObject(label: string = '', isDone: boolean = false) {
    return {
      label, 
      isDone
    }
  }

  removeItem(item){
    this.toDoList = this.toDoList.filter(todoItem => todoItem.label !== item.label);
  }

  retrieveData(item){
    this.toDoList = item;
  }

}

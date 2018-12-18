import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  @Input() todoList : object[];
  @Output() clickChildEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  strikeData(item : object){
    const index = this.todoList.indexOf(item);
    if (index !== -1) {
      this.todoList[index] = item.strike();
      this.clickChildEvent.emit(this.todoList);
    } 
  }

  removeData(item : object){
    const itemRemain = this.todoList.filter(todoListItem => todoListItem !== item);
    this.todoList = itemRemain;
    this.clickChildEvent.emit(this.todoList);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Input() workList : string[];
  dataContainer : string;
  constructor() { }

  ngOnInit() {
  }

  saveData(data : any) {
    this.dataContainer = data.target.value;
  }

  addItem(item: string){
    this.workList.push(item);
    return this.workList;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  @Input() textLabel : string[];

  constructor() { }

  ngOnInit() {
  }

  strikeData(item : string){
    const index = this.textLabel.indexOf(item);
    if (index !== -1) {
      this.textLabel[index] = item.strike();
    } 
  }

  removeData(item : string){
    const itemRemain = this.textLabel.filter(textLabelItem => textLabelItem !== item);
    this.textLabel = itemRemain;
  }
}

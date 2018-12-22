import { DataStoreService } from './../../../service/data-store.service';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }

  removeObject(idNumber: number){
    this.dataStoreService.removeObjectService(idNumber);
  }

  strikeItem(idNumber: number){
    this.dataStoreService.strikeItemService(idNumber);
  }

  pullItemBack(idNumber: number){
    this.dataStoreService.setFlagOffService(idNumber);
  }

}

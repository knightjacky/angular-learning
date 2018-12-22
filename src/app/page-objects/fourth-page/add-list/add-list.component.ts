import { element } from 'protractor';
import { DataStoreService } from './../../../service/data-store.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  @ViewChild('inputData') inputData: any;
  itemName = '';
  
  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }

  addObject(item: string){
    this.dataStoreService.updateObjectService(item);
    document.querySelector
  }

  receiveData(text: any){
    this.itemName = text.target.value;
  }

  resetInput(){
    this.inputData.reset();
  }
}

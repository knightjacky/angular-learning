import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/service/data-store.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  public toDoList;

  constructor(private datastore: DataStoreService) {
    console.log('parent subscribing to service')
    this.datastore.todoListObservable.subscribe((data) => {
      console.log('data heard in parent from service', data)
    })
  }

  ngOnInit() {
    this.toDoList = this.datastore.getData();
  }

  retrieveData(item){
    this.toDoList = item;
    console.log('Parent got data from child');
    this.datastore.storeItem(item);
  }

}

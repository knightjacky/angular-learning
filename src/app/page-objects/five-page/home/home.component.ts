import { DataStoreService } from './../../../service/data-store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titleStyle: boolean = false;
  users: Object;

  constructor(private data: DataStoreService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data =>{
      this.users = data;
      console.log(this.users);
    })
  }

  changeTitleStyle(){
    this.titleStyle = this.data.changeTitleStyleService(this.titleStyle);
  }


}

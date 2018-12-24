import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  links =[
    {path: '', icon: 'home', lable: 'Home'},
    {path: 'firstofassignment', icon: 'home', lable: 'Homework1'},
    {path: 'secondhomework', icon: 'list', lable: 'Homework2'},
    {path: 'thirdhomework', icon: 'list', lable: 'Homework3'},
    {path: 'fivepage', icon: 'list', lable: 'Homework4'},
    {path: 'fivepage/about', icon: 'list', lable: 'About'},
    {path: 'fivepage/contact', icon: 'view_quilt', lable: 'Contact Us'},
    {path: 'fivepage/profile', icon: 'profile', lable: 'Profile'}    
  ];
  constructor() { }

  ngOnInit() {
  }

}

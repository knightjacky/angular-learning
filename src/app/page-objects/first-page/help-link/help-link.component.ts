import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-help-link',
  templateUrl: './help-link.component.html',
  styleUrls: ['./help-link.component.css']
})
export class HelpLinkComponent implements OnInit {
  title = 'angular-learning';
  constructor() { }

  ngOnInit() {
  }
  goPage(){
    window.location.href = 'firstofassignment';
  }
}

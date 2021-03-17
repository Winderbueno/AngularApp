import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-home',
  templateUrl: './app-ng-home.component.html',
  styleUrls: ['./app-ng-home.component.scss']
})
export class AppNgHomeComponent implements OnInit {

  title = 'shoppingListApp';

  constructor() { }

  ngOnInit(): void {
  }

}

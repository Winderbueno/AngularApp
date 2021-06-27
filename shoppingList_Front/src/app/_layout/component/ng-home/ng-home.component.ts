import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-home',
  templateUrl: './ng-home.component.html',
  styleUrls: ['./ng-home.component.scss']
})
export class NgHomeComponent implements OnInit {

  title = 'shoppingList_Front';

  constructor() { }

  ngOnInit(): void {
  }

}

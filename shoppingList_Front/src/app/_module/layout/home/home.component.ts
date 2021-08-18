//#region Angular & Material
import { Component, OnInit } from '@angular/core';
//#endregion


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'shoppingList_Front';

  constructor() {}

  ngOnInit(): void {}

}

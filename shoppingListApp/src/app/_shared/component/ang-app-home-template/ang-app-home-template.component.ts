import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-app-home-template',
  templateUrl: './ang-app-home-template.component.html',
  styleUrls: ['./ang-app-home-template.component.scss']
})
export class AngAppHomeTemplateComponent implements OnInit {

  title = 'shoppingListApp';

  constructor() { }

  ngOnInit(): void {
  }

}

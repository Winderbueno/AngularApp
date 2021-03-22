import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Model and Service
import { User } from '../../model/user.model';
import { AuthenticationService } from '../../../security/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  currentUser!: User;

  constructor(
    private router: Router,
    private authentService: AuthenticationService,
  ) { 
    // Subscribe to the connected user
    this.authentService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {}

  logout() {
    this.authentService.logout();
    this.router.navigate(['/']);
  }

}

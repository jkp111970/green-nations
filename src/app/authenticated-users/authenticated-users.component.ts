import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticated-users',
  templateUrl: './authenticated-users.component.html',
  styleUrls: ['./authenticated-users.component.css']
})
export class AuthenticatedUsersComponent implements OnInit {

  isAuthenticated : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

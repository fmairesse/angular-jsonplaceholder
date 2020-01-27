import { Component, OnInit } from '@angular/core';

import { UserModel } from 'app/core/models/user.model';
import { UsersService } from 'app/core/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: UserModel[]
  constructor(
    private usersService: UsersService
   ) { }
  
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }

}
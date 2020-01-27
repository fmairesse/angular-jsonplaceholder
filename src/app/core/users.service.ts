import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserModel } from 'app/core/models/user.model';
import { WebapiService } from './webapi.service';

const usersPath = 'users'

@Injectable()
export class UsersService {
  constructor(private webapi: WebapiService) { }

  getUsers(): Observable<UserModel[]> {
    return this.webapi.get<UserModel[]>(usersPath)
  }

  getUser(id: number): Observable<UserModel> {
    return this.webapi.get<UserModel>(`${usersPath}/${id}`)
  }

}
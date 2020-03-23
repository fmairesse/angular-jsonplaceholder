import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { WebapiService } from 'app/core/webapi.service';
import { UserModel } from './user.model';

const usersPath = 'users'

@Injectable({providedIn: 'root'})
export class UsersService {
	constructor(private webapi: WebapiService) { }

	getUsers(): Observable<UserModel[]> {
		return this.webapi.get<UserModel[]>(usersPath).pipe(
			delay(1),
			map(users => {
				const newUsers = []
				for (let i = 0; i < 20; ++i) {
					newUsers.push(...users)
				}
				return newUsers
			}))
	}

	getUser(id: number): Observable<UserModel> {
		return this.webapi.get<UserModel>(`${usersPath}/${id}`)
	}

	deleteUser(id: number): Observable<void> {
		return this.webapi.delete(`${usersPath}/${id}`)
	}

	updateUser(user: UserModel): Observable<UserModel> {
		return this.webapi.put(`${usersPath}/${user.id}`, user)
	}
}
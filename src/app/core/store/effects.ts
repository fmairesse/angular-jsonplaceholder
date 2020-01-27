import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, mergeMap, catchError } from 'rxjs/operators';

import { UserModel } from '../models/user.model';
import { UsersService } from '../users.service';
import * as actions from './actions';
import { EMPTY } from 'rxjs';


@Injectable()
export class UsersEffects {
	// for dispatching multiple actions, see https://stackoverflow.com/q/41701138/287058
	private loadUsers = createEffect(() => this.actions$.pipe(
		ofType(actions.types.users.loading),
		// delay(1000),
		mergeMap(() => this.usersService.getUsers()),
		map((users: UserModel[]) => actions.creators.users.loaded({payload: users})),
		catchError((e) => {
			console.log('UsersEffects error', e)
			return EMPTY
		})
	))

	constructor(
		private actions$: Actions,
		private usersService: UsersService
	 ) {}
}
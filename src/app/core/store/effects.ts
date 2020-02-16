import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import { UserModel } from '../models/user.model';
import { UsersService } from '../users.service';
import * as actions from './actions';


@Injectable()
export class UsersEffects {
	// for dispatching multiple actions, see https://stackoverflow.com/q/41701138/287058
	private loadUsers = createEffect(() => this.actions$.pipe(
		ofType(actions.types.users.loading),
		// delay(1000),
		mergeMap(() => this.usersService.getUsers()),
		map((users: UserModel[]) => actions.creators.users.loaded({payload: {status: 'loaded', data: users}})),
		catchError((e) => {
			console.log('UsersEffects error', e)
			return of(actions.creators.users.loaded({payload: {status: 'loadingError', data: []}}))
		})
	))

	constructor(
		private actions$: Actions,
		private usersService: UsersService
	 ) {}
}
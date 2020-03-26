import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { UserModel } from 'app/pages/about/user.model';
import { UsersService } from 'app/pages/about/users.service';
import * as actions from './users.actions';


@Injectable()
export class UsersEffects {
	private loadUsers$ = createEffect(() => this.actions$.pipe(
		ofType(actions.creators.loading),
		mergeMap(() => this.usersService.getUsers()),
		map((users: UserModel[]) => actions.creators.loadedSuccess({ users })),
		catchError((e) => {
			console.log('UsersEffects error', e)
			return of(actions.creators.loadedFailure({ error: String(e) }))
		})
	))

	private deleteUsers$ = createEffect(() => this.actions$.pipe(
		ofType(actions.creators.deleting),
		mergeMap(a => this.usersService.deleteUser(a.id).pipe(map(() => a.id))),
		map((id: number) => actions.creators.deleted({ id })),
		catchError(() => EMPTY)
	))

	private updateUser$ = createEffect(() => this.actions$.pipe(
		ofType(actions.creators.updating),
		mergeMap(a => this.usersService.updateUser(a.user)),
		map((user: UserModel) => actions.creators.updated({ user })),
		catchError(() => EMPTY)
	))

	constructor(
		private actions$: Actions,
		private usersService: UsersService
	) {
	}
}
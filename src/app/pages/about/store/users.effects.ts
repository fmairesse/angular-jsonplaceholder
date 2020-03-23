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
	// for dispatching multiple actions, see https://stackoverflow.com/q/41701138/287058
	private loadUsers$ = createEffect(() => this.actions$.pipe(
		ofType(actions.types.loading),
		// delay(1000),
		mergeMap(() => this.usersService.getUsers()),
		map((users: UserModel[]) => actions.creators.loadedSuccess({ users })),
		catchError((e) => {
			console.log('UsersEffects error', e)
			return of(actions.creators.loadedFailure({ error: String(e) }))
		})
	))

	private deleteUsers$ = createEffect(() => this.actions$.pipe(
		ofType(actions.types.deleting),
		mergeMap((a: Action & actions.IdActionsProps) => this.usersService.deleteUser(a.id).pipe(map(() => a.id))),
		map((id: number) => actions.creators.deleted({ id })),
		catchError(() => EMPTY)
	))

	private updateUser$ = createEffect(() => this.actions$.pipe(
		ofType(actions.types.updating),
		mergeMap((a: Action & actions.UserActionProps) => this.usersService.updateUser(a.user)),
		map((user: UserModel) => actions.creators.updated({user})),
		catchError(() => EMPTY)
	))

	constructor(
		private actions$: Actions,
		private usersService: UsersService
	) {
	}
}
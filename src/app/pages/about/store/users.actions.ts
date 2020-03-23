import { createAction, props } from '@ngrx/store';

import { UserModel } from '../user.model';


export const types = {
	loading:       '[Users] loading users',
	loadedSuccess: '[Users] succeeeded to load users',
	loadedFailure: '[Users] failed to load users',
	deleting:      '[Users] deleting user',
	deleted:       '[Users] deleted user',
	updating:      '[Users] updating user',
	updated:       '[Users] updated user'
}

export interface RequestingActionProps {
	requesting: boolean
}

export interface IdActionsProps {
	id: number
}

export interface UserActionProps {
	user: UserModel
}

export const creators = {
	loading: createAction(types.loading),
	loadedSuccess: createAction(types.loadedSuccess, props<{users: UserModel[]}>()),
	loadedFailure: createAction(types.loadedFailure, props<{error: string}>()),
	deleting: createAction(types.deleting, props<IdActionsProps>()),
	deleted: createAction(types.deleted, props<IdActionsProps>()),
	updating: createAction(types.updating, props<UserActionProps>()),
	updated: createAction(types.updated, props<UserActionProps>())
}

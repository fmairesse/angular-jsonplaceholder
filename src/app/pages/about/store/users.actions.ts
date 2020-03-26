import { createAction, props } from '@ngrx/store';

import { UserModel } from '../user.model';


export interface IdActionsProps {
	id: number
}

export interface UserActionProps {
	user: UserModel
}

export const creators = {
	loading: createAction(
		'[Users] loading users'),
	loadedSuccess: createAction(
		'[Users] succeeeded to load users', props<{users: UserModel[]}>()),
	loadedFailure: createAction(
		'[Users] failed to load users', props<{error: string}>()),
	deleting: createAction(
		'[Users] deleting user', props<IdActionsProps>()),
	deleted: createAction(
		'[Users] deleted user', props<IdActionsProps>()),
	updating: createAction(
		'[Users] updating user', props<UserActionProps>()),
	updated: createAction(
		'[Users] updated user', props<UserActionProps>())
}
import { createAction, props } from '@ngrx/store';

import { UserModel } from '../models/user.model';
import { LoadEntitiesState } from './state';


export const types = {
	requesting: '[Requesting] request in progress',
	users: {
		loading:  '[Users] loading users',
		loaded:   '[Users] loaded users',
		deleting: '[Users] deleting user',
		deleted:  '[Users] deleted user',
		updating: '[Users] updating user',
		updated:  '[Users] updated user'
	}
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

export interface LoadReply<T> {
	payload: LoadEntitiesState<T>
}

export const creators = {
	requesting: createAction(types.requesting, props<RequestingActionProps>()),
	users: {
		loading: createAction(types.users.loading),
		loaded: createAction(types.users.loaded, props<LoadReply<UserModel[]>>()),
		deleting: createAction(types.users.deleting, props<IdActionsProps>()),
		deleted: createAction(types.users.deleted, props<IdActionsProps>()),
		updating: createAction(types.users.updating, props<UserActionProps>()),
		updated: createAction(types.users.updated, props<UserActionProps>())
	}
}

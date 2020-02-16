import { createAction, props } from '@ngrx/store';

import { UserModel } from '../models/user.model';
import { LoadEntitiesState } from './state';


export const types = {
	requesting: '[Requesting] request in progress',
	users: {
		loading: '[Users] loading users',
		loaded: '[Users] users loaded'
	}
}

export interface RequestingActionProps {
	requesting: boolean
}

export interface LoadReply<T> {
	payload: LoadEntitiesState<T>
}

export const creators = {
	requesting: createAction(types.requesting, props<RequestingActionProps>()),
	users: {
		loading: createAction(types.users.loading),
		loaded: createAction(types.users.loaded, props<LoadReply<UserModel[]>>())
	}
}

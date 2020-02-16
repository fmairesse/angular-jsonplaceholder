import { UserModel } from '../models/user.model';

export type LoadStatus = 'loaded' | 'notLoaded' | 'loadingError'

export interface LoadEntitiesState<T> {
	status: LoadStatus,
	data: T
}

export type UsersState = LoadEntitiesState<UserModel[]>

export interface State {
	requesting: boolean, // whether an http request is being sent
	users: UsersState
}

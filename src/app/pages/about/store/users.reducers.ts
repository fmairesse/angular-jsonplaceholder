import { createReducer, on } from '@ngrx/store';

import * as actions from './users.actions';
import { UsersState } from './users.state';


const initialState: UsersState = {
	loadingError: null,
	loading: false,
	users: []
}

export const reducer = createReducer<UsersState>(initialState,
	on(actions.creators.loading,
		state => ({...state, loading: true, loadingError: null})),
	on(actions.creators.loadedSuccess,
		(state, action) => {
			return ({users: action.users, loading: false, loadingError: null})
		}),
	on(actions.creators.loadedFailure,
		(state, action) => ({...state, loading: false, loadingError: action.error})),
	on(actions.creators.deleted,
		(state, action) => {
			return { ...state, users: state.users.filter(u => u.id !== action.id) }
		}),
	on(actions.creators.updated,
		(state, action) => {
			return { ...state, users: state.users.map(u => u.id === action.user.id ? action.user : u) }
		})
)

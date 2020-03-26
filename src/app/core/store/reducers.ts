import {  ActionReducer, ActionReducerMap, createReducer, MetaReducer, on } from '@ngrx/store';

import { environment } from 'environments/environment';
import * as actions from './actions';
import { State } from './state';

const initialState: State = {
	requesting: false
}

export const reducers: ActionReducerMap<State> = {
	requesting: createReducer<boolean>(initialState.requesting, on(
		actions.creators.requesting,
		(state: boolean, action) => action.requesting))
};

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
	return function (state, action) {
		console.group(action.type)
		console.log('state', state);
		console.log('action', action);
		console.groupEnd()

		return reducer(state, action);
	};
}

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [debug];

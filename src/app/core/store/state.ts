import { RouterReducerState } from '@ngrx/router-store';

export interface State {
	requesting: boolean, // whether an http request is being sent,
	router: RouterReducerState
}

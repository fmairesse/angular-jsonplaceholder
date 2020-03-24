import { createReducer, on } from '@ngrx/store';

import * as actions from './posts.actions';
import { adapter, initialState, PostsState } from './posts.state';


export const reducer = createReducer<PostsState>(initialState,
	on(actions.creators.loading,
		(state: PostsState) => ({ ...state, loading: true })),
	on(actions.creators.loadedSuccess,
		(state: PostsState, action) => ({
			...adapter.addMany(action.posts, state),
			loadingError: null,
			loading: false
		})),
	on(actions.creators.loadedFailure,
		(state: PostsState, action) => ({ ...state, loadingError: action.error })),
	on(actions.creators.creating,
		(state: PostsState, action) => ({...state, creating: true})),
	on(actions.creators.createdSuccess,
		(state: PostsState, action) => ({...adapter.addOne(action.post, state), creating: false, }))
)

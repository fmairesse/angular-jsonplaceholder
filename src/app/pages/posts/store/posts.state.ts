

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromRoot from 'app/core/store/state';
import { PostModel } from '../post.model';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface PostsState extends EntityState<PostModel> {
	loadingError: any,
	loading: boolean,
	creating: boolean
}

export const PostFeatureStoreKey = 'posts';

export interface State extends fromRoot.State {
	[PostFeatureStoreKey]: PostsState
}

/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<PostModel> = createEntityAdapter<PostModel>({
	selectId: (post: PostModel) => post.id,
	sortComparer: false
})

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: PostsState = adapter.getInitialState({
	loadingError: null,
	loading: false,
	creating: false
});

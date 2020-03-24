import { PostModel } from "../post.model";
import { createAction, props } from '@ngrx/store';

export const types = {
	loading:         '[Posts] loading posts',
	loadedSuccess:   '[Posts] succeeded to load posts',
	loadedFailure:   '[Posts] failed to load posts',
	creating:        '[Posts] creating post',
	createdSuccess: '[Posts] succeeded to create post',
}

export interface PostActionProps {
	post: PostModel
}

export const creators = {
	loading: createAction(types.loading),
	loadedSuccess: createAction(types.loadedSuccess, props<{ posts: PostModel[] }>()),
	loadedFailure: createAction(types.loadedFailure, props<{ error: any }>()),
	creating: createAction(types.creating, props<{post: PostModel}>()),
	createdSuccess: createAction(types.createdSuccess, props<{post: PostModel}>())
}
import { PostModel } from "../post.model";
import { createAction, props } from '@ngrx/store';


export const creators = {
	loading: createAction(
		'[Posts] loading posts'),
	loadedSuccess: createAction(
		'[Posts] succeeded to load posts', props<{ posts: PostModel[] }>()),
	loadedFailure: createAction(
		'[Posts] failed to load posts', props<{ error: any }>()),
	creating: createAction(
		'[Posts] creating post', props<{post: PostModel}>()),
	createdSuccess: createAction(
		'[Posts] succeeded to create post', props<{post: PostModel}>())
}
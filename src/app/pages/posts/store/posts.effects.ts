import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';

import * as actions from './posts.actions';
import { PostsService } from '../posts.service';
import { PostModel } from '../post.model';

@Injectable()
export class PostsEffects {
	private loadPosts$ = createEffect(() => this.actions$.pipe(
		ofType(actions.creators.loading),
		mergeMap(() => this.postsService.getPosts()),
		map((posts: PostModel[]) => actions.creators.loadedSuccess({ posts })),
		catchError((error) => {
			console.log('PostsEffects error', error)
			return of(actions.creators.loadedFailure({ error }))
		})
	))

	private createPost$ = createEffect(() => this.actions$.pipe(
		ofType(actions.creators.creating),
		mergeMap(action => this.postsService.addPost(action.post)),
		map((post: PostModel) => actions.creators.createdSuccess({ post })),
	))

	constructor(
		private actions$: Actions,
		private postsService: PostsService
	) {
	}
}
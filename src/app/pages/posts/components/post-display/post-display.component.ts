import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { PostModel } from '../../post.model';
import { PostsService } from '../../posts.service';
import * as actions from '../../store/posts.actions';
import { State } from '../../store/posts.state';
import { selectLoadingError, selectLoading, selectAll } from '../../store/posts.selectors';


@Component({
	selector: 'app-post-display',
	templateUrl: './post-display.component.html',
	styleUrls: ['./post-display.component.css']
})
export class PostDisplayComponent {
	posts$: Observable<PostModel[]>;
	loadingError$: Observable<any>;
	loading$: Observable<boolean>;

	constructor(private postsService: PostsService, store: Store<State>) {
		store.dispatch(actions.creators.loading())
		this.loadingError$ = store.select(selectLoadingError)
		this.loading$ = store.select(selectLoading)
		this.posts$ = store.select(selectAll)
	}

	trackPostsByFn(index: number, post: PostModel) {
		return post.id;
	}

}
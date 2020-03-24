import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PostModel } from '../../post.model';
import { State } from '../../store/posts.state';
import * as actions from '../../store/posts.actions';

@Component({
	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

	constructor(private readonly store: Store<State>) { }

	addPost(post: PostModel) {
		post.title = post.title.trim()
		post.body = post.body.trim()
		this.store.dispatch(actions.creators.creating({post}))
	}
}
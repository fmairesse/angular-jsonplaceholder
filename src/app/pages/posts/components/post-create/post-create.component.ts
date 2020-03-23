import { Component, OnInit } from '@angular/core';

import { PostModel } from '../../post.model';
import { PostsService } from '../../posts.service';

@Component({
	selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

	constructor(
		private postsService: PostsService
	) { }

	addPost(post: PostModel) {
		post.title = post.title.trim()
		post.body = post.body.trim()
		this.postsService.addPost(post).subscribe()
	}

	ngOnInit() {
	}

}
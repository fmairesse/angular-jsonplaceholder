import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { WebapiService } from 'app/core/webapi.service';
import { PostModel } from './post.model';

const postsPath = 'posts';

@Injectable()
export class PostsService {
	constructor(private webapi: WebapiService) { }

	getPost(id: number): Observable<PostModel> {
		return this.webapi.get<PostModel>(`${postsPath}/${id}`)
	}

	getPosts(): Observable<PostModel[]> {
		return this.webapi.get<PostModel[]>(`${postsPath}?_sort=views&_order=desc`)
	}

	addPost(post: PostModel): Observable<PostModel> {
		return this.webapi.post<PostModel>(postsPath, post)
	}

}
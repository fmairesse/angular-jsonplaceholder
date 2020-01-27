import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './store/state';
import * as actions from './store/actions';
import { delay, finalize } from 'rxjs/operators';

const baseUrl = 'https://jsonplaceholder.typicode.com';
// const baseUrl = 'http://localhost:3000';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json; charset=UTF-8',
	})
}

@Injectable()
export class WebapiService {

	constructor(private readonly http: HttpClient, private readonly store: Store<State>) { }

	private url(path: string): string {
		return `${baseUrl}/${path}`;
	}

	get<T>(path: string): Observable<T> {
		this.store.dispatch(actions.creators.requesting({requesting: true}))
		return this.http.get<T>(this.url(path)).pipe(
			// delay(3000),
			finalize(() => {
				this.store.dispatch(actions.creators.requesting({requesting: false}))
			}
		))
	}

	post<T>(path: string, body: any): Observable<T> {
		this.store.dispatch(actions.creators.requesting({requesting: true}))
		return this.http.post<T>(this.url(path), body, httpOptions).pipe(finalize(() => {
			this.store.dispatch(actions.creators.requesting({requesting: false}))
		}))
	}
}

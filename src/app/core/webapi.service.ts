import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './store/state';
import * as actions from './store/actions';
import { delay, finalize } from 'rxjs/operators';

// const baseUrl = 'https://jsonplaceholder.typicode.com';
const baseUrl = 'http://localhost:3000';
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

	private send<T>(sendFn: () => Observable<T>): Observable<T> {
		this.store.dispatch(actions.creators.requesting({ requesting: true }))
		return sendFn().pipe(
			// delay(3000),
			finalize(() => {
				this.store.dispatch(actions.creators.requesting({ requesting: false }))
			}
			))
	}

	get<T>(path: string): Observable<T> {
		return this.send<T>(() => this.http.get<T>(this.url(path)))
	}

	post<T>(path: string, body: any): Observable<T> {
		return this.send<T>(() => this.http.post<T>(this.url(path), body, httpOptions))
	}

	delete(path: string): Observable<void> {
		return this.send<void>(() => this.http.delete<void>(this.url(path)))
	}

	put<T>(path: string, body: any): Observable<T> {
		return this.send<T>(() => this.http.put<T>(this.url(path), body, httpOptions))
	}
}

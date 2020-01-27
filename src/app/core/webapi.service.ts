import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const baseUrl = 'https://jsonplaceholder.typicode.com/';
const baseUrl = 'http://localhost:3000';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json; charset=UTF-8',
	})
}

@Injectable()
export class WebapiService {

	constructor(private readonly http: HttpClient) { }

	private url(path: string): string {
		return `${baseUrl}/${path}`;
	}

	get<T>(path: string): Observable<T> {
		return this.http.get<T>(this.url(path))
	}

	post<T>(path: string, body: any): Observable<T> {
		return this.http.post<T>(this.url(path), body, httpOptions)
	}
}

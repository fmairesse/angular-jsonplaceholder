import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import * as actions from './actions';


@Injectable()
export class CoreEffects {
	requesting$ = createEffect(() => this.actions$.pipe(
		mergeMap(a => {
			if (a.type.indexOf('ngrx/data') !== -1) {
				const requesting = a.type.indexOf('error') === -1 && a.type.indexOf('success') === -1
				return of(actions.creators.requesting({requesting}))
			}
			return EMPTY
		})
	))

	constructor(private actions$: Actions){}
}
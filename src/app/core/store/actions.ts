import { createAction, props } from '@ngrx/store';


export const creators = {
	requesting: createAction('[Requesting] request in progress', props<{requesting: boolean}>())
}

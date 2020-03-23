import { createAction, props } from '@ngrx/store';


export const types = {
	requesting: '[Requesting] request in progress'
}

export interface RequestingActionProps {
	requesting: boolean
}

export const creators = {
	requesting: createAction(types.requesting, props<RequestingActionProps>())
}

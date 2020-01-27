import { Action, ActionReducerMap, createReducer, MetaReducer, on, ActionReducer } from '@ngrx/store';

import { environment } from 'environments/environment';
import { UserModel } from '../models/user.model';
import * as actions from './actions';
import { State } from './state';


const initialState: State = {
  requesting: false,
  users: []
}

export const reducers: ActionReducerMap<State> = {
  requesting: createReducer<boolean>(initialState.requesting, on(
      actions.creators.requesting,
      (state: boolean, action: Action & actions.RequestingActionProps) => action.requesting)),
  users: createReducer<UserModel[]>(initialState.users, on(
    actions.creators.users.loaded,
    (state: UserModel[], action: Action & actions.LoadArrayReply<UserModel>) => action.payload))
};

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.group(action.type)
    console.log('state', state);
    console.log('action', action);
    console.groupEnd()
 
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [debug];

import { Action, ActionReducerMap, createReducer, MetaReducer, on, ActionReducer } from '@ngrx/store';

import { environment } from 'environments/environment';
import { UserModel } from '../models/user.model';
import * as actions from './actions';
import { State, UsersState, LoadEntitiesState } from './state';


const initialState: State = {
  requesting: false,
  users: {
    status: 'notLoaded',
    data: []
  }
}

export const reducers: ActionReducerMap<State> = {
  requesting: createReducer<boolean>(initialState.requesting, on(
      actions.creators.requesting,
      (state: boolean, action: Action & actions.RequestingActionProps) => action.requesting)),
  users: createReducer<UsersState>(initialState.users,
    on(actions.creators.users.loaded,
      (state: UsersState, action: Action & actions.LoadReply<UserModel[]>) => action.payload),
    on(actions.creators.users.deleted,
      (state: UsersState, action: Action & actions.IdActionsProps) => {
        return {...state, data: state.data.filter(u => u.id !== action.id)}
      }),
    on(actions.creators.users.updated,
      (state: UsersState, action: Action & actions.UserActionProps) => {
        return {...state, data: state.data.map(u => u.id === action.user.id ? action.user : u)}
      })
  )
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

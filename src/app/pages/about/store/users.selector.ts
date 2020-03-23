import { createFeatureSelector, createSelector } from "@ngrx/store";

import { State, UsersState, UsersFeatureStoreKey } from './users.state';

const selectUsersState = createFeatureSelector<State, UsersState>(UsersFeatureStoreKey)

export const selectLoadingError = createSelector(selectUsersState, (state: UsersState) => state.loadingError)
export const selectLoading = createSelector(selectUsersState, (state: UsersState) => state.loading)
export const selectUsers = createSelector(selectUsersState, (state: UsersState) => state.users)
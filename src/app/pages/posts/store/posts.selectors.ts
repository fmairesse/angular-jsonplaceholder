import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter, PostsState, State, PostFeatureStoreKey } from './posts.state';

const selectPostsState = createFeatureSelector<State, PostsState>(PostFeatureStoreKey)

export const { selectAll } = adapter.getSelectors(selectPostsState);
export const selectLoadingError = createSelector(selectPostsState, (state: PostsState) => state.loadingError);
export const selectLoading = createSelector(selectPostsState, (state: PostsState) => state.loading);

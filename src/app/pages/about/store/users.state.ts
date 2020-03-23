import { UserModel } from '../user.model';
import * as fromRoot from 'app/core/store/state';

export interface UsersState {
	loadingError: string
	loading: boolean
	users: UserModel[]
}

export const UsersFeatureStoreKey = 'users';

export interface State extends fromRoot.State {
	[UsersFeatureStoreKey]: UsersState
}
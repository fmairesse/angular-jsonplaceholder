import { UserModel } from '../models/user.model';


export interface State {
	requesting: boolean, // whether an http request is being sent
	users: UserModel[]
}

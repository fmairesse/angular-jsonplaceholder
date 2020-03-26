import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from 'app/pages/about/user.model';
import * as actions from './store/users.actions';
import { UsersFeatureStoreKey, UsersState, State } from './store/users.state';
import { selectUsers, selectLoadingError, selectLoading } from './store/users.selector';


interface UserDataForm {
	data: UserModel
	form: FormGroup
}

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
	users$: Observable<Object>
	loadingError$: Observable<string>
	loading$: Observable<boolean>

	constructor(private readonly store: Store<State>) {
		this.users$ = store.select(selectUsers).pipe(
			map((users: UserModel[]) => {
				return users.map((user: UserModel) => {
					return {
						data: user,
						form: new FormGroup({
							username: new FormControl(user.username),
							name: new FormControl(user.name),
							email: new FormControl(user.email),
							website: new FormControl(user.website)
						})
					}
				})
			})
		)
		this.loading$ = store.select(selectLoading)
		this.loadingError$ = store.select(selectLoadingError)
		this.store.dispatch(actions.creators.loading())
	}

	deleteUser(id: number) {
		this.store.dispatch(actions.creators.deleting({ id }))
	}

	updateUser(user: UserDataForm) {
		const newUser = {
			...user.data,
			...['username', 'name', 'email', 'website'].reduce((data: any, propname: string) => {
				data[propname] = user.form.get(propname).value
				return data
			}, {})
		}
		this.store.dispatch(actions.creators.updating({ user: newUser }))
	}

	trackUsersByFn(index: number, user: UserDataForm) {
		return user.data.id;
	}

}
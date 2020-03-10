import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from 'app/core/models/user.model';
import { State, UsersState } from 'app/core/store/state';
import * as actions from 'app/core/store/actions';

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
export class AboutComponent implements OnInit {

  usersState$: Observable<UsersState>
  formGroup$: Observable<FormGroup>
  data$: Observable<Object>
  

  constructor(private readonly store: Store<State>) {
    this.data$ = store.pipe(
      select('users'),
      map((usersState: UsersState) => {
        return {
          status: usersState.status,
          users: usersState.data.map((user: UserModel) => {
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
        }
      })
    )
    this.usersState$ = store.pipe(select('users'))
    this.formGroup$ = this.usersState$.pipe(map((usersState: UsersState) => {
      const formGroup = new FormGroup(usersState.data.reduce((controls: {[key: string]: AbstractControl}, user: UserModel) => {
        controls[user.id] = new FormControl(user.username)
        return controls
      }, {}))
      return formGroup
    }))
  }

  ngOnInit() {
    // setTimeout to prevent ExpressionChangedAfterItHasBeenCheckedError
    // in ngIf of app.component
    setTimeout(() => {
      this.store.dispatch(actions.creators.users.loading())
    }, 0)
  }

  deleteUser(id: number) {
    this.store.dispatch(actions.creators.users.deleting({id}))
  }

  updateUser(user: UserDataForm) {
    const newUser = {
      ...user.data,
      ...['username', 'name', 'email', 'website'].reduce((data: any, propname: string) => {
        data[propname] = user.form.get(propname).value
        return data
      }, {})
    }
    this.store.dispatch(actions.creators.users.updating({user: newUser}))
  }

  trackUsersByFn(index: number, user: UserDataForm) {
    console.log('trackB')
    return user.data.id;
  }

}
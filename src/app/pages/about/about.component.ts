import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModel } from 'app/core/models/user.model';
import { State, UsersState } from 'app/core/store/state';
import * as actions from 'app/core/store/actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  usersState$: Observable<UsersState>

  constructor(private readonly store: Store<State>) {
    this.usersState$ = store.pipe(select('users'))
  }

  ngOnInit() {
    // setTimeout to prevent ExpressionChangedAfterItHasBeenCheckedError
    // in ngIf of app.component
    setTimeout(() => {
      this.store.dispatch(actions.creators.users.loading())
    }, 1000)
  }

}
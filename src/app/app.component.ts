import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './core/store/state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  requesting$: Observable<boolean>

  constructor(store: Store<State>) {
    this.requesting$ = store.select('requesting')
  }
}

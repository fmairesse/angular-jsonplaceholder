import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'environments/environment';
import { metaReducers, reducers } from './store/reducers';
import { WebapiService } from './webapi.service';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forRoot(reducers, {
			metaReducers,
			runtimeChecks: {
				strictStateImmutability: true,
				strictActionImmutability: true,
			}
		}),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	providers: [
		WebapiService,
	]
})
export class CoreModule {
	// Copied from https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/
	constructor(@Optional() @SkipSelf() core: CoreModule) {
		if (core) {
			throw new Error("You should import core module only in the root module")
		}
	}
}

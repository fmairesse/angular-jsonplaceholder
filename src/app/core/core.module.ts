import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'environments/environment';
import { metaReducers, reducers } from './store/reducers';
import { CoreEffects } from './store/effects';
import { WebapiService } from './webapi.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
	delete404OK: false, // Prevent 404 response to validate a DELETE
	entityHttpResourceUrls: {
		// because jsonplaceholder API does not handle singular/plural
		// like ngrx/data 
		Album: {
			entityResourceUrl: 'api/albums/',
			collectionResourceUrl: 'api/albums'
		}
	}
}

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
		EffectsModule.forRoot([CoreEffects]),
		EntityDataModule.forRoot({
			entityMetadata: {
				Album: {}
			}
		}),
		StoreRouterConnectingModule.forRoot({routerState: RouterState.Minimal}),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	providers: [
		WebapiService,
		{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
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

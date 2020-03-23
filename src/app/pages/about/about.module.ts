import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducer } from './store/users.reducers';
import { AboutComponent } from './about.component';
import { UsersEffects } from './store/users.effects';
import { UsersFeatureStoreKey } from './store/users.state';


const routes: Routes = [{
	path: '',
	component: AboutComponent
}];


@NgModule({
	declarations: [
		AboutComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		StoreModule.forFeature(UsersFeatureStoreKey, reducer),
		EffectsModule.forFeature([UsersEffects])
	],
	exports: [
		RouterModule
	]
})
export class AboutModule { }

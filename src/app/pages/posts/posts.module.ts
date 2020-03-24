import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from "app/shared/shared.module";
import { PostCreateComponent } from "./components/post-create/post-create.component";
import { PostDisplayComponent } from "./components/post-display/post-display.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostsService } from "./posts.service";
import { reducer } from './store/posts.reducers';
import { PostFeatureStoreKey } from './store/posts.state';
import { PostsEffects } from './store/posts.effects';

const routes: Routes = [
	{
		path: "",
		component: PostsComponent
	}
];

@NgModule({
	declarations: [PostsComponent, PostDisplayComponent, PostCreateComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,
		StoreModule.forFeature(PostFeatureStoreKey, reducer),
		EffectsModule.forFeature([PostsEffects])
	],
	providers: [PostsService]
})
export class PostsModule { }

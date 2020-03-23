import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { PostCreateComponent } from "./components/post-create/post-create.component";
import { PostDisplayComponent } from "./components/post-display/post-display.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostsService } from "./posts.service";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './posts.service';

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
    SharedModule
	],
	providers: [PostsService]
})
export class PostsModule { }

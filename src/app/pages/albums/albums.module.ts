import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [{
	path: '',
	component: AlbumsComponent
}];

@NgModule({
	declarations: [
		AlbumsComponent,
		AlbumComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class AlbumsModule { }

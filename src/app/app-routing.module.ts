import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'posts', loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule) },
	{ path: 'albums', loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule) },
	{ path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
	{ path: '**', redirectTo: 'home' },
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true })
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
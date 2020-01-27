import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', loadChildren: './pages/posts/posts.module#PostsModule'},
  {path: 'albums', loadChildren: './pages/albums/albums.module#AlbumsModule'},
  {path: 'about', loadChildren: './pages/about/about.module#AboutModule'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
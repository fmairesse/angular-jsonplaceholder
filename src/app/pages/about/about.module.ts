import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [{
  path: '',
  component: AboutComponent
}];


@NgModule({
  declarations: [
    AboutComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutModule { }

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebapiService } from './webapi.service';
import { UsersService } from './users.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    WebapiService,
    UsersService
  ]
})
export class CoreModule {
  // Copied from https://www.tektutorialshub.com/angular/angular-folder-structure-best-practices/
  constructor(@Optional() @SkipSelf() core:CoreModule ){
    if (core) {
        throw new Error("You should import core module only in the root module")
    }
  }
}

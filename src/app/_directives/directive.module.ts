import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationDirective } from './../_directives/pagination/pagination.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginationDirective],
  exports:[PaginationDirective]
})
export class DirectiveModule { }

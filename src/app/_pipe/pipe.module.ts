import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPipe } from './search/search.pipe';
import { PaginatePipe } from './paginate/paginate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchPipe, PaginatePipe],
  exports:[SearchPipe, PaginatePipe]
})
export class PipeModule { }

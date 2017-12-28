import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPipe } from './search/search.pipe';
import { SortPipe } from './sort/sort.pipe';
import { PaginatePipe } from './paginate/paginate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchPipe, SortPipe, PaginatePipe],
  exports:[SearchPipe, SortPipe, PaginatePipe]
})
export class PipeModule { }

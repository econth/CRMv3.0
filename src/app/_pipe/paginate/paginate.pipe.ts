import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(input: any[], itemsPerPage: number, currentPage: number): any {
    return input.slice(itemsPerPage * (currentPage - 1), (itemsPerPage * (currentPage - 1)+itemsPerPage));
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  public transform(value:any[], searchText : string, keys: any ) {

    if (!searchText) {
      return value;
    }else if(!keys || keys==""){
      return value.filter(item => JSON.stringify(item).toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
    }else{
      return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(searchText, 'gi').test(item[key])));
    }
  }
}

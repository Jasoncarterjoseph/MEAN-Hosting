import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchValue: string): any {
    console.log(searchValue);
    if(searchValue.toLowerCase().trim() === ""){
      return value;
    }
    const searchQuery: any[] = [];
    for(const book of value){
      if(book['title'].toLowerCase().trim() === searchValue.toLowerCase().trim()){
        searchQuery.push(book);
      }
      else if(book['author'].toLowerCase().trim() === searchValue.toLowerCase().trim()){
        searchQuery.push(book);
      }
      else if(book['genre'].toLowerCase().trim() === searchValue.toLowerCase().trim()){
        searchQuery.push(book);
      }
    }
    return searchQuery;
  }

}

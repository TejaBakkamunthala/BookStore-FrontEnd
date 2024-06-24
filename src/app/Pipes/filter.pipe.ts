import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,bookNote:string) {
    if(bookNote === '')
    {
      return value;
    }

    const books=[];
    for(const book of value){
      if(book.title.includes(bookNote)){
        books.push(book)
      }

    }
    return books;
  }

}


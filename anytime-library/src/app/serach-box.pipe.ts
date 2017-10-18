import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachBox'
})
export class SerachBoxPipe implements PipeTransform {

  transform(value: any, searchByname:string): any {
    if(searchByname === ''){
      return value;
    }
    const resultArray = [];
    value.forEach(element => {
      // console.log(element.name.substr(searchByname));
      if(element.name.toLowerCase().indexOf(searchByname.toLowerCase()) !== -1){
        resultArray.push(element)
      }
    });
    return resultArray;
  }

}
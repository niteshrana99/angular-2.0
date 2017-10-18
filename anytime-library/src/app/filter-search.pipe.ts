import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any, istechBookselected: boolean, isMgmselected: boolean, isFictionBookselected: boolean): any {
    if (!isFictionBookselected && !isMgmselected && !istechBookselected) {
      return value;
    }
    const returnArray = [];
    value.forEach((element) => {
      if (isFictionBookselected) {
        element.genre === 'fiction' ? returnArray.push(element) : returnArray;
      }
      if (isMgmselected) {
        element.genre === 'management' ? returnArray.push(element) : returnArray;
      }
      if (istechBookselected) {
        element.genre === 'Technology' ? returnArray.push(element) : returnArray;
      }
    })
    return returnArray;
  }

}

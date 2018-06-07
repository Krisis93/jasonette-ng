import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uselessPipe'
})
export class uselessPipe implements PipeTransform {

  transform(categories: any, branding: any, colorr: any): any {
    if(branding == null) return categories;

    return categories.filter(function (category){
      if (branding && category.carName.toLowerCase().indexOf(branding.toLowerCase()) === -1) {
        return false
      } else if (colorr && category.color.toLowerCase().indexOf(colorr.toLowerCase()) === -1) {
        return false;
      }
      return categories;
    })
    
  }
  }



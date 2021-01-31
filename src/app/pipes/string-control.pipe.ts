import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringControl'
})
export class StringControlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length > 150){
      return value.slice(0, 149) + '...see more';
    }

  }

}

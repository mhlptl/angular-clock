import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class ToStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    return JSON.stringify(value);
  }

}

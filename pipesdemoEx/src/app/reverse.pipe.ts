import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let arr=Array.from(value);
    console.log(arr.reverse().join(""));
    return null;

}
}
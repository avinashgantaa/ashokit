import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msg'
})
export class MsgPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return args[1]+" "+args[0]+" "+value;
  }

}

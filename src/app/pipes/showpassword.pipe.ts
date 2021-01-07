import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpassword'
})

export class ShowpasswordPipe implements PipeTransform {
  transform(value: string, show: boolean = true): string {
    return (show) ? '*'.repeat(value.length) : value;
  }

}

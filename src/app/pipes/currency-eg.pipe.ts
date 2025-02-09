import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyEg'
})
export class CurrencyEgPipe implements PipeTransform {
    transform(value: number): string {
      if (value == null) return '';
      return `${value} ج.م`;
    }
}

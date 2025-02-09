import { Component } from '@angular/core';
import { NumberHeaderComponent } from '../number-header/number-header.component';
import { NumberFooterComponent } from '../number-footer/number-footer.component';

@Component({
  selector: 'app-number-parent',
  imports: [NumberHeaderComponent,NumberFooterComponent],
  templateUrl:'./number-parent.component.html',
  styleUrl: './number-parent.component.scss'
})
export class NumberParentComponent {
  selectedNumber = '01234567910';
  selectedCountry = 'المملكة الاردنية الهاشمية';
  company = 'فودافون مصر'
  client = 'الشركة الالمانية للابادة'
  extension = 9
  date ='29/12/2024'
  balance = 5000
  clientBalance = 5000
  allBalance = 5000
}

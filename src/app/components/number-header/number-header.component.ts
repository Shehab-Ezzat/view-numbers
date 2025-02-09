import { NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CurrencyEgPipe } from '../../pipes/currency-eg.pipe';

@Component({
  selector: 'app-number-header',
 imports:[NgIf,CurrencyEgPipe],
  templateUrl: './number-header.component.html',
  styleUrls: ['./number-header.component.scss']
})
export class NumberHeaderComponent {
  @Input() number!: string;
  @Input() country!: string;
  @Input() protocol!: string;
  @Input() client!: string;
  @Input() extension!: number;
  @Input() date!: string;
  @Input() balance!: number;
  @Input() clientBalance!: number;
  @Input() allBalance!: number;

  isListOpen = false;
  isActive = false;


  @ViewChild('dropdownContainer', { static: false }) dropdownContainer!: ElementRef;

  toggleList(event: Event) {
    event.stopPropagation(); 
    this.isListOpen = !this.isListOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.dropdownContainer && !this.dropdownContainer.nativeElement.contains(event.target)) {
      this.isListOpen = false;
      this.isActive = false;
    }
  }

  formatWithZero(value: number): string {
    return new Intl.NumberFormat('en-US', { minimumIntegerDigits: 2 }).format(value);
  }
  


}

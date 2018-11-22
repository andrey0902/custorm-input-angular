import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioItemComponent } from './radio-item/radio-item.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioDirective } from './directives/radio.directive';

@NgModule({
  declarations: [
    RadioItemComponent,
    RadioGroupComponent,
    RadioDirective,
  ],
  exports: [
    RadioItemComponent,
    RadioGroupComponent,
    RadioDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class RadioModule { }

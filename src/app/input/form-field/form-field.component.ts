import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { InputDirective } from '../input.directive';
import { AppFormFieldControl } from '../shared/app.form.field.control';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterContentInit {
  @ContentChild(AppFormFieldControl) public appInput: AppFormFieldControl<any>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('appInput', this.appInput);
  }

}

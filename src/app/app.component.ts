import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TestDataSearchService } from './test-data-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
              public testData: TestDataSearchService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      name2: [null, [Validators.required, Validators.minLength(3)]],
      agree: [null, [Validators.required, Validators.requiredTrue]],
      agree2: [null, [Validators.requiredTrue]],
      radio: [null, [Validators.required]],
      radio2: [null, [Validators.required]],
      search: [null, [Validators.required]],
    });
  }

  save() {
    console.log('value', this.form.value);
    console.log('form', this.form);
  }

  dis() {
    console.log('dis');

    this.form.get('name').disable();
    this.form.get('name2').disable();
    this.form.get('agree').disable();
    this.form.get('agree2').disable();
    this.form.get('radio').disable();
    this.form.get('radio2').disable();
    this.form.get('search').disable();
  }

  enable() {
    console.log('enabled');

    (this.form.get('name') as FormControl).enable();
    (this.form.get('name2') as FormControl).enable();
    (this.form.get('agree') as FormControl).enable();
    (this.form.get('agree2') as FormControl).enable();
    (this.form.get('radio') as FormControl).enable();
    (this.form.get('radio2') as FormControl).enable();
    (this.form.get('search') as FormControl).enable();
  }

  OnSearch(e) {
    console.log('result', e);
  }
}

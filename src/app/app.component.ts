import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      agree: [null, [Validators.required, Validators.requiredTrue]],
      agree2: [null, [Validators.requiredTrue]],
      radio: [null, [Validators.required]],
    });
  }

  save() {
    console.log('value', this.form.value);
    console.log('form', this.form);
  }

  dis() {
    console.log('dis');

    this.form.get('name').disable();
    this.form.get('agree').disable();
    this.form.get('agree2').disable();
    this.form.get('radio').disable();
  }

  enable() {
    console.log('enabled');

    (this.form.get('name') as FormControl).enable();
    (this.form.get('agree') as FormControl).enable();
    (this.form.get('agree2') as FormControl).enable();
    (this.form.get('radio') as FormControl).enable();
  }
}

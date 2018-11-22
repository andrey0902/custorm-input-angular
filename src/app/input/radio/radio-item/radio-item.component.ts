import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { RadioGroupComponent } from '../radio-group/radio-group.component';

let uniqueUid = 0;

@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.scss']
})
export class RadioItemComponent implements OnInit {
  @Input() public value: any;
  public id = `_id_radio_${uniqueUid++}`;
  public name = `radio_name_${uniqueUid++}`;
  constructor(@Optional() @Host() private host: RadioGroupComponent) { }

  ngOnInit() {
    // console.log('this.host', this.host);
    // console.log('this.value', this.value);
    // console.log('this.id', this.id);
  }

  select() {
    if (!this.host) {
      return;
    }
    this.host.doChange(this.value);
  }

  checkedValue(): boolean {
    if (!this.host) {
      return null;
    }
    return this.host.value === this.value;
  }

}

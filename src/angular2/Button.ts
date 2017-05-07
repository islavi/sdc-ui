import { Component, Input } from '@angular/core';

@Component({
  selector: 'sdc-button',
  template: `
    <button class='sdc-button sdc-button__{{type}}'><ng-content></ng-content></button>
  `
})
export default class SdcButton {

  @Input() type:string = 'primary';

  constructor() {  
  }

}
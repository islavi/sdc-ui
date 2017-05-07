import { Component, Input } from '@angular/core';

@Component({
  selector: 'Button',
  template: `
    <button class='sdc-button sdc-button__{{type}}'><ng-content></ng-content></button>
  `
})
export default class Button {

  @Input() type:string = 'primary';

  constructor() {  
  }

}
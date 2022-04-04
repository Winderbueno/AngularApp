//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region This
import { FieldComponent } from '../field.component';
//#endregion


/**
 * Slider Field Component
 */
@Component({
  selector: 'k-form-field-slider[ctrlName]',
  templateUrl: 'slider-field.component.html'
})
export class SliderFieldComponent extends FieldComponent {

  @Input() min: number = 1;
  @Input() max: number = 100;
  @Input() tickInterval: number = 1;

  val: number = this.min;

  ngOnInit() {

    // TODO - Value should be between min & max
    this.value === '' ? 
      this.value = this.min : 
      this.val = this.value as number;

    this.required = false;
    super.ngOnInit();
  }
}

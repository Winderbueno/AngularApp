//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '@form/component';
//#endregion


/**
 * Slider Field Component
 */
@Component({
  selector: 'k-form-field-slider',
  templateUrl: 'slider-field.component.html'
})
export class SliderFieldComponent extends FieldComponent {

  @Input() min: number = 1;
  @Input() max: number = 100;
  val:number=this.value as number;
  @Input() tickInterval: number = 1;

  ngOnInit() {
    this.required = false;
    super.ngOnInit();
  }
}

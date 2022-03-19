//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion

//#region Component, Model, Service
import { FieldComponent } from '..';
//#endregion

/**
 * Multiple Option Field Component
 *
 * This component adds the necessary input to a Field to handle multiple avaoptions :
 * 
 *  @param options - List of available options (as a string array of displayed label)
 *  @param labelAsValue? - (Default:true)
 *    Specify if the value stored in the formState is the label index or the label itself
 *  @param optionClass? - CSS class added to the options (eg. For integration with <mat-menu>)
 */
@Component({ template: `` })
export class MultipleOptionFieldComponent extends FieldComponent {
  @Input() options!: string[] | null | undefined;
  @Input() valueAsLabel: boolean = true;
  @Input() optionClass: string = '';
}

//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion


/**
 * Link Component
 *  
 *  @param uri? - (Default:'submit') - HTML button type (Can be 'submit' | 'button')
 *  @param icon? - <mat-icon> string identifier (See: https://fonts.google.com/icons?icon.query=user)
 *  @param color? - (Default:'primary') - Can be 'primary' | 'accent' | 'warn'
 */
 @Component({ template: '' })
export class LinkComponent {
  @Input() uri!: string;
  @Input() icon?: string;
  @Input() color?: string;
}

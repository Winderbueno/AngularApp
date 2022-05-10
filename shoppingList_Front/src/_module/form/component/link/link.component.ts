//#region Angular, Material, NgRx
import { Component, Input } from '@angular/core';
//#endregion


/**
 * Link Component
 *  
 *  @param uri? - ressource identifer
 *  @param route? - app route
 *  @param icon? - <mat-icon> string identifier (See: https://fonts.google.com/icons?icon.query=user)
 *  @param color? - (Default:'primary') - Can be 'primary' | 'accent' | 'warn'
 */
 @Component({ template: '' })
export class LinkComponent {
  @Input() uri?: string;
  @Input() route?: string;
  @Input() color?: string;
}

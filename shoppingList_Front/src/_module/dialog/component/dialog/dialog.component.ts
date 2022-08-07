//#region Angular, Material, NgRx
import { 
  Component, 
  ComponentFactoryResolver, 
  ComponentRef, 
  Inject, 
  ViewChild, 
  ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
//#endregion

@Component({
  selector: 'dynamic-comp',
  template: ``
})
export class DynamicComponent {}

@Component({ templateUrl: './dialog.component.html' })
export class DialogComponent {

  @ViewChild('target', { read: ViewContainerRef, static: true }) vcRef!: ViewContainerRef;

  componentRef?: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.data.component);
    this.componentRef = this.vcRef.createComponent(factory);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}

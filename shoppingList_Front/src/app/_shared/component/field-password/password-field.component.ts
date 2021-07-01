//#region Angular, Material, RxJS
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
//#endregion

//#region Model and Service
import { FormErrorService } from '@app_error/service/form-error.service';
//#endregion

@Component({
  selector: 'app-password-field',
  templateUrl: 'password-field.component.html' })
export class PasswordFieldComponent {

  @Input() control!: FormControl;

  pwd_hide: boolean = true;

  // Access getters
  get err() { return this.formErrorService; }

  constructor(private formErrorService: FormErrorService) { }
}

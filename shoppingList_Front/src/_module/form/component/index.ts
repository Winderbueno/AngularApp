import { FormComponent } from './form/form.component';
import { Buttons } from './button';
import { FieldGroups } from './field-group';
import { Fields } from './field';

export const Components = [
  FormComponent,
  ...Buttons,
  ...FieldGroups,
  ...Fields
];

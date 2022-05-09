import { Buttons } from './button';
import { FieldGroups } from './field-group';
import { Fields } from './field';
import { FormComponent } from './form/form.component';
import { Links } from './link';

export const Components = [
  ...Buttons,
  ...FieldGroups,
  ...Fields,
  FormComponent,
  ...Links
];

export { FormComponent };

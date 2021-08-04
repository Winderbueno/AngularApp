//#region Angular
import { FormGroup } from '@angular/forms';
//#endregion

// Custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) : any {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // Return if another validator has already found an error on the matchingControl
            return;
        }

        // Set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

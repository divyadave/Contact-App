import { AbstractControl } from '@angular/forms';

export function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    const validPlus = control.value && control.value.length > 0 && control.value.charAt(0) === '+';
    const valid = /^\+[0-9 ]+$/.test(control.value);


    let error = 'Phone Number has to be number';
    if (!validPlus) {
        error = 'Phone number must start with country code (eg.: +91)';
    }
    return valid ? null : { invalidNumber: { error } };

}
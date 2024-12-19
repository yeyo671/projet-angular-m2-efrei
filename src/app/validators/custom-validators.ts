import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function containsWordValidator(word: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (value && !value.includes(word)) {
            return { containsWord: { requiredWord: word } };
        }
        return null;
    };
}
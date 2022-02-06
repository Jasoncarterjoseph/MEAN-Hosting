// Decorators
import { Directive } from '@angular/core';

// Forms
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms';
var validator = require('validator');


// Validator

export const isUrlValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const isControlUrl = validator.isURL(control.value);
  return !isControlUrl ? { 'isUrl': false } : null;
};

@Directive({
  selector: '[appIsUrl]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: IsUrlDirective,
    multi: true
  }]
})
export class IsUrlDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return isUrlValidator(control);
  }
}

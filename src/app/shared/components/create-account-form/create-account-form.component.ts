import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationCallbackData } from 'devextreme/ui/validation_rules';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../../services';
import { FormFields, UserRegistrationModel, ValidationRule } from './model/form-data';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  standalone: true,
  imports: [DxFormModule, DxLoadIndicatorModule, CommonModule]
})

export class CreateAccountFormComponent {
  [x: string]: any;
  loading: boolean = false;
  userRegistrationData: UserRegistrationModel = {
    email: '',
    password: '',
    confirmedPassword: '',
    displayName: '',
    phoneNumber: ''
  };
  phonePattern: RegExp = /^\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/;

  constructor(private authService: AuthService, private router: Router) { }

  async onSubmit(e: Event) {
    e.preventDefault();
    this.loading = true;

    const result = await this.authService.createAccount(this.userRegistrationData);
    this.loading = false;

    if (result.isOk) {
      this.router.navigate(['/login-form']);
    } else {
      notify(result.message, 'error', 2000);
    }
  }

  confirmPassword = (e: ValidationCallbackData) => {
    return e.value === this.userRegistrationData.password;
  }

  getValidationCallback(rule: ValidationRule): Function {
    return rule.validationCallback ? rule.validationCallback.bind(this) : (() => true);
  }

  getPattern(rule: ValidationRule): string | RegExp {
    return rule.pattern || '';
  }

  formFields: FormFields[] = [
    {
      dataField: 'email',
      editorType: 'dxTextBox',
      editorOptions: { stylingMode: 'filled', placeholder: 'Email', mode: 'email' },
      validationRules: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Email is not valid' }
      ]
    },
    {
      dataField: 'password',
      editorType: 'dxTextBox',
      editorOptions: { stylingMode: 'filled', placeholder: 'Password', mode: 'password' },
      validationRules: [
        { type: 'required', message: 'Password is required' }
      ]
    },
    {
      dataField: 'confirmedPassword',
      editorType: 'dxTextBox',
      editorOptions: { stylingMode: 'filled', placeholder: 'Confirm Password', mode: 'password' },
      validationRules: [
        { type: 'required', message: 'Confirm Password is required' },
        { type: 'custom', message: 'Passwords do not match', validationCallback: this.confirmPassword.bind(this) }
      ]
    },
    {
      dataField: 'displayName',
      editorType: 'dxTextBox',
      editorOptions: { stylingMode: 'filled', placeholder: 'Display Name', maxLength: 15 },
      validationRules: [
        { type: 'required', message: 'Display Name is required' }
      ]
    },
    {
      dataField: 'phoneNumber',
      editorType: 'dxTextBox',
      editorOptions: { stylingMode: 'filled', placeholder: 'Phone Number', mode: 'tel' },
      validationRules: [
        { type: 'required', message: 'Phone Number is required' },
        { type: 'pattern', pattern: this.phonePattern, message: 'The phone must have a correct German phone format' }
      ]
    }
  ];

  trackByFormFields(index: number, item: FormFields): string {
    return item.dataField;
  }
}

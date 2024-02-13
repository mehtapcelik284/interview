import { ValidationCallbackData } from "devextreme/ui/validation_rules";

export interface UserRegistrationModel {
  readonly email: string;
  readonly password: string;
  readonly confirmedPassword: string;
  readonly displayName: string;
  readonly phoneNumber: string;
}

export interface ValidationRule {
  type: string;
  message: string;
  validationCallback?: (e: ValidationCallbackData) => boolean;
  pattern?: string | RegExp;
}

export interface FormFields {
  dataField: string,
  editorType: string,
  editorOptions: object,
  validationRules: ValidationRule[]
}

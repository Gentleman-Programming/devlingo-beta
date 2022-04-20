import { InputError } from '@/styled-components';
import { InputBaseProps, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';

const formValidation = (errors: FieldErrors, errorKey: string) => {
  return errors[errorKey] ? <InputError className="error-message">{errors[errorKey].message}</InputError> : '';
};

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  errors?: FieldErrors;
  type: InputType;
  inputProps?: any;
  disabled?: boolean;
  trigger?: UseFormTrigger<any>;
  placeholder?: string;
}

export enum InputType {
  NUMBER = 'number',
  PASSWORD = 'password',
  SEARCH = 'search',
  TEXT = 'text',
  HIDDEN = 'hidden',
  CHECKBOX = 'checkbox'
}

/*

*/

export const Input = ({ register, name, errors, type, inputProps, disabled = false, trigger, placeholder }: InputProps) => {
  return (
    <div>
      <TextField
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        placeholder={placeholder}
        {...register(name)}
        {...(inputProps && { inputProps: inputProps })}
        color="primary"
        onChange={() => trigger && trigger()}
        fullWidth
        autoComplete="off"
        InputProps={inputProps}
      />
      {errors && formValidation(errors, name)}
    </div>
  );
};

export default Input;

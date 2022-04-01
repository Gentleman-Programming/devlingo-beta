import { InputError } from '@/styled-components';
import { InputBaseProps, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { InputAdornment, IconButton } from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Lock } from '@mui/icons-material';

const formValidation = (errors: FieldErrors, errorKey: string) => {
  return errors[errorKey] ? <InputError className="error-message">{errors[errorKey].message}</InputError> : '';
};

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  errors?: FieldErrors;
  label?: string;
  type: InputType;
  inputProps?: InputBaseProps['inputProps'];
  disabled?: boolean;
  trigger?: UseFormTrigger<any>;
  Component?: JSXElement;
}

export enum InputType {
  NUMBER = 'number',
  PASSWORD = 'password',
  SEARCH = 'search',
  TEXT = 'text',
  HIDDEN = 'hidden',
  CHECKBOX = 'checkbox'
}

export const Input = ({ register, name, errors, label = '', type, inputProps, disabled = false, trigger, Component }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      {type === 'password' ? (
        <div>
          <TextField
            disabled={disabled}
            type={showPassword ? 'text' : 'password'}
            error={errors && !!errors[name]}
            id={name}
            label={label}
            {...register(name)}
            {...(inputProps && { inputProps: inputProps })}
            color="primary"
            onChange={() => trigger && trigger()}
            fullWidth
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          {errors && formValidation(errors, name)}
        </div>
      ) : (
        <div>
          <TextField
            disabled={disabled}
            type={type}
            error={errors && !!errors[name]}
            id={name}
            label={label}
            {...register(name)}
            {...(inputProps && { inputProps: inputProps })}
            onChange={() => trigger && trigger()}
            fullWidth
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Component />
                </InputAdornment>
              )
            }}
          />
          {errors && formValidation(errors, name)}
        </div>
      )}
    </>
  );
};

export default Input;

import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { Input, InputType } from './Input';

type props = {
  errors?: FieldErrors;
  register: UseFormRegister<any>;
};

const InputPassword = ({ errors, register }: props) => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  return (
    <Input
      errors={errors}
      register={register}
      type={showPassword ? InputType.TEXT : InputType.PASSWORD}
      name="password"
      placeholder="contraseña"
      inputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Lock fontSize="large" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {!showPassword ? <VisibilityOff fontSize="large" /> : <Visibility fontSize="large" />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default InputPassword;

import { createAddaptedUser } from '@/adapters';
import { Input } from '@/components';
import { InputType } from '@/components/Input';
import { SignInWithProviderButton, AuthProvider } from '@/components/SignInWithProviderButton';
import { useYupValidationResolver } from '@/hooks';
import { User } from '@/models';
import { signup } from '@/services/firebase';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

import { Form, Circle, Button, Mustachi } from '@/styled-components';
import mustachi from '@/assets/mustachi.svg';
import { Layout } from '../Login/styled-components';
import { AccountCircle } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { CenterDiv } from './styled-components';
import { Visibility, VisibilityOff, Lock } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';

const validationSchema = yup.object({
  email: yup.string().email().required('Required'),
  password: yup.string().min(6).required('Required')
});

const Register = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const { t } = useTranslation();
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({ resolver });

  const onSubmit: SubmitHandler<User> = async (newUserFormData) => {
    try {
      const newUser = await signup(newUserFormData);
      const appUser = await createAddaptedUser(newUser);
    } catch (error) {}
  };

  return (
    <Layout flex="row-reverse">
      <Circle width="85%" height="140%" right="-12%" top="-5%" paddingRight="8%">
        <h2>¿List@ para crear tu cuenta y empezar a mejorar tus habilidades?</h2>
      </Circle>
      <Circle width="8%" height="8%" top="15%" right="-12%" />
      <Circle width="20%" height="20%" top="-45%" right="-4%" />

      <Form left="true" onSubmit={handleSubmit(onSubmit)}>
        <Mustachi src={mustachi} alt="mustachi" />
        <Input
          placeholder="correo electronico"
          register={register} name="email"
          type={InputType.TEXT}
          label="email"
          errors={errors}
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
        <Input
          placeholder="contraseña" 
          register={register}
          name="password"
          type={showPassword ? InputType.TEXT : InputType.PASSWORD}
          label="password"
          errors={errors}
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
        <Button primary="true">{t('register.createAccount')}</Button>
        <CenterDiv>
          <p>──────── O ────────</p>
        </CenterDiv>
        <CenterDiv>
          <SignInWithProviderButton provider={AuthProvider.GOOGLE}><GoogleIcon sx={{ fontSize: '4.5vmin' }} /> </SignInWithProviderButton>
          <SignInWithProviderButton provider={AuthProvider.GITHUB}><GitHubIcon sx={{ fontSize: '4.5vmin' }} /> </SignInWithProviderButton>
        </CenterDiv>
      </Form>
    </Layout>
  );
};

export default Register;

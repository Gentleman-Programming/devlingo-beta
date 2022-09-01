import mustachi from '@/assets/mustachi.svg';
import { Input } from '@/components';
import { InputType } from '@/components/Input';
import InputPassword from '@/components/InputPassword';
import { useYupValidationResolver } from '@/hooks';
import { UserLogin } from '@/models';
import { signup } from '@/services/firebase';
import { Button, Circle, Form, Mustachi } from '@/styled-components';
import { AccountCircle } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { Layout } from '../Login/styled-components';

const validationSchema = yup.object({
  email: yup.string().email().required('Required'),
  password: yup.string().min(6).required('Required')
});

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const resolver = useYupValidationResolver(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLogin>({ resolver });

  const onSubmit: SubmitHandler<UserLogin> = async newUserFormData => {
    try {
      await signup(newUserFormData);
      navigate('/login');
    } catch (error) {
      alert(JSON.stringify(error, null, 2));
    }
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
          errors={errors}
          register={register}
          type={InputType.TEXT}
          name="email"
          placeholder="correo electronico"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle fontSize="large" />
              </InputAdornment>
            )
          }}
        />
        <InputPassword errors={errors} register={register} />
        <Button primary="true">{t('register.createAccount')}</Button>
      </Form>
    </Layout>
  );
};

export default Register;

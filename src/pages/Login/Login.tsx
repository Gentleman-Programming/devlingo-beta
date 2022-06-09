import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginPasswordAndEmail } from '@/services/firebase/firebase.service';
import mustachi from '@/assets/mustachi.svg';
import { AccountCircle } from '@mui/icons-material';
import { Input, InputType } from '@/components/Input';
import { Form, Circle, Button, StyledLink, Mustachi } from '@/styled-components';
import { Layout } from './styled-components';
import { createAddaptedUser } from '@/adapters';
import { useDispatch } from 'react-redux';
import { createUser } from '@/redux/states/user';
import { EmailRegex, PasswordRegex } from '@/models';
import { useYupValidationResolver } from '@/hooks';
import { InputAdornment } from '@mui/material';
import InputPassword from '@/components/InputPassword';

const schema = yup.object({
  email: yup.string().matches(EmailRegex, 'ingrese un email valido').required('el email es requerido'),
  password: yup.string().matches(PasswordRegex, 'ingrese una contraseña valida').required('debe ingresar una contraseña'),
});

export const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: useYupValidationResolver(schema),
  });

  const handleLogin = async (dataUser: any) => {
    const user: any = await LoginPasswordAndEmail(dataUser);
    const adapterUser = await createAddaptedUser(user);
    dispatch(createUser(adapterUser));
  };

  return (
    <Layout>
      <Circle width="85%" height="140%" left="-12%" top="-5%" paddingLeft="8%">
        <h2>Inicia sesión para seguir mejorando tus habilidades</h2>
      </Circle>
      <Circle width="8%" height="8%" top="15%" left="-12%" />
      <Circle width="20%" height="20%" top="-45%" left="-4%" />
      <Form right="true" onSubmit={handleSubmit(handleLogin)}>
        <Mustachi src={mustachi} alt="mustachi" />
        <Input
          errors={errors}
          register={register}
          type={InputType.TEXT}
          name="email"
          placeholder="correo electronico"
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle fontSize="large" />
              </InputAdornment>
            ),
          }}
        />
        <InputPassword errors={errors} register={register} />
        <StyledLink to="/">olvide mi contraseña</StyledLink>
        <Button primary="true" type="submit">iniciar sesión</Button>
      </Form>
    </Layout>
  );
};

export default Login;

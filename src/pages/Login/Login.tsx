import { createAddaptedUser } from '@/adapters';
import mustachi from '@/assets/mustachi.svg';
import { AuthProvider, SignInWithProviderButton } from '@/components';
import { Input, InputType } from '@/components/Input';
import InputPassword from '@/components/InputPassword';
import { useYupValidationResolver } from '@/hooks';
import { EmailRegex, PasswordRegex, UserLogin } from '@/models';
import { createUser } from '@/redux/states/user';
import { LoginPasswordAndEmail } from '@/services/firebase/firebase.service';
import { Button, Circle, Form, Mustachi, StyledLink } from '@/styled-components';
import { AccountCircle } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import { InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { CenterDiv } from '../Register/styled-components';
import { Layout } from './styled-components';

const schema = yup.object({
  email: yup.string().matches(EmailRegex, 'ingrese un email valido').required('el email es requerido'),
  password: yup
    .string()
    .matches(PasswordRegex, 'la contraseña debe contener minimo 8 caracteres, una mayuscula, un numero y un caracter especial')
    .required('debe ingresar una contraseña')
});

export const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: useYupValidationResolver(schema)
  });

  const handleLogin = async (dataUser: UserLogin) => {
    const user = await LoginPasswordAndEmail(dataUser);
    const adapterUser = await createAddaptedUser(user);
    dispatch(createUser(adapterUser));
  };

  return (
    <Layout>
      <Circle width="85%" height="140%" left="-12%" top="-5%" paddingLeft="8%">
        <h2>Inicia sesión para</h2>
        <h2>seguir mejorando tus</h2>
        <h2>habilidades</h2>
      </Circle>
      <Circle width="8%" height="8%" top="15%" left="-12%" />
      <Circle width="20%" height="20%" top="-45%" left="-4%" />
      <Form onSubmit={handleSubmit(handleLogin)}>
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
        <StyledLink to="/">olvide mi contraseña</StyledLink>
        <Button primary="true" type="submit">
          iniciar sesión
        </Button>
        <CenterDiv>
          <p>──────── O ────────</p>
        </CenterDiv>
        <CenterDiv>
          <SignInWithProviderButton provider={AuthProvider.GOOGLE}>
            <GoogleIcon sx={{ fontSize: '4.5vmin' }} />{' '}
          </SignInWithProviderButton>
        </CenterDiv>
      </Form>
    </Layout>
  );
};

export default Login;

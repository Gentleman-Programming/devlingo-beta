import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LoginPasswordAndEmail } from '@/services/firebase/firebase.service';
import mustachi from '@/assets/mustachi.svg';
import { AccountCircle } from '@mui/icons-material';
import { Input, InputType } from '@/components/Input';
import { Form, Circle, Button, StyledLink, Mustachi } from '@/styled-components';
import { Layout } from './styled-components';
import { createAdaptedUser } from '@/adapters';
import { useDispatch } from 'react-redux';
import { createUser } from '@/redux/states/user';
import { EmailRegex, PasswordRegex } from '@/models';
import { useYupValidationResolver } from '@/hooks';

/*
  datos de prueba en mi local (Dante)
  email: test@gmail.com
  password: Testapp$
*/

const schema = yup.object({
  email: yup.string().matches(EmailRegex, 'ingrese un email valido').required('el email es requerido'),
  password: yup.string().matches(PasswordRegex, 'ingrese una contraseña valida').required('debe ingresar una contraseña')
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
  const inputProps = [
    {
      type: InputType.TEXT,
      register,
      name: 'email',
      label: 'correo electronico',
      Component: AccountCircle,
      errors
    },
    {
      type: InputType.PASSWORD,
      register,
      name: 'password',
      label: 'contraseña',
      errors
    }
  ];

  const handleLogin = async (dataUser: any) => {
    const user: any = await LoginPasswordAndEmail(dataUser);
    const adapterUser = createAdaptedUser(user);
    dispatch(createUser(adapterUser));
  };

  return (
    <Layout>
      <Circle width="85%" height="140%" left="-12%" top="-5%" paddingLeft="8%">
        <h2>Inicia sesión para</h2> <h2>seguir mejorando tus</h2>
        <h2>habilidades</h2>
      </Circle>
      <Circle width="8%" height="8%" top="15%" left="-12%" />
      <Circle width="20%" height="20%" top="-45%" left="-4%" />
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Mustachi src={mustachi} alt="mustachi" />
        {inputProps.map((props) => (
          <Input {...props} />
        ))}
        <StyledLink to="/">olvide mi contraseña</StyledLink>
        <Button type="submit">iniciar sesión</Button>
      </Form>
    </Layout>
  );
};

export default Login;

import { useForm } from 'react-hook-form';

import { LoginPasswordAndEmail } from '@/services/firebase/firebase.service';
import mustachi from '@/assets/mustachi.svg';
import { AccountCircle } from '@mui/icons-material';
import { Input, InputType } from '@/components/Input';
import { Form, Circle, Button, StyledLink, Mustachi } from '@/styled-components';
import { Layout, TextCircle } from './styled-components';
import { createAdaptedUser } from '@/adapters';
import { useDispatch } from 'react-redux';
import { createUser } from '@/redux/states/user';

/*
  datos de prueba en mi local (Dante)
  email: test@gmail.com
  password: Testapp$
*/

export const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const inputProps = [
    {
      type: InputType.TEXT,
      register,
      name: 'email',
      label: 'correo electronico',
      Component: AccountCircle
    },
    {
      type: InputType.PASSWORD,
      register,
      name: 'password',
      label: 'contraseña'
    }
  ];

  const handleLogin = async (dataUser: any) => {
    const user: any = await LoginPasswordAndEmail(dataUser);
    const adapterUser = createAdaptedUser(user);
    dispatch(createUser(adapterUser));
  };

  return (
    <Layout>
      <Circle width="1100px" heigth="1100px" left="-235px" top="-64px">
        <TextCircle>
          Inicia sesión para <br /> seguir mejorando tus <br /> habilidades
        </TextCircle>
      </Circle>
      <Circle position width="60px" heigth="60px" top="535px" left="615px" />
      <Circle position width="163px" heigth="163px" top="-45px" left="660px" />
      <Form onSubmit={handleSubmit(handleLogin)}>
        <Mustachi src={mustachi} alt="mustachi" />
        {inputProps.map((props) => (
          <Input {...props} key={props.name} />
        ))}
        <StyledLink to="/">olvide mi contraseña</StyledLink>
        <Button type="submit">iniciar sesión</Button>
      </Form>
    </Layout>
  );
};

export default Login;

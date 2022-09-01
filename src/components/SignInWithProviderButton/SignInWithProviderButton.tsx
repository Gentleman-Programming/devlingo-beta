import { createAddaptedUser } from '@/adapters';
import { createUser } from '@/redux';
import { signinWithGithub, signinWithGoogle } from '@/services/firebase';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const CircleButton = styled.button`
  border-radius: 2vw;
  width: 4vw;
  height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export enum AuthProvider {
  GOOGLE,
  GITHUB
}

interface ButtonProps {
  children: React.ReactNode;
  provider: AuthProvider;
}

const SignInWithProviderButton = ({ children, provider }: ButtonProps) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const adapterUser = await createAddaptedUser(await signinWithGoogle());
    dispatch(createUser(adapterUser));
  };
  return <CircleButton onClick={handleSubmit}>{children}</CircleButton>;
};
export default SignInWithProviderButton;

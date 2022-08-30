import { createAddaptedUser } from '@/adapters';
import { signinWithGoogle, signinWithGithub } from '@/services/firebase';
import { UserCredential } from 'firebase/auth';
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
  GITHUB,
}

interface ButtonProps {
  children: React.ReactNode;
  provider: AuthProvider;
}

const SignInWithProviderButton = ({ children, provider }: ButtonProps) => {
  const handleSubmit = async () => {
    switch (provider) {
      case AuthProvider.GOOGLE:
        await createAddaptedUser(await signinWithGoogle());
        break;
      case AuthProvider.GITHUB:
        await createAddaptedUser(await signinWithGithub());
        break;
    }
  };
  return <CircleButton onClick={handleSubmit}>{children}</CircleButton>;
};
export default SignInWithProviderButton;

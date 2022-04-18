import { createAddaptedUser } from '@/adapters';
import { signinWithGoogle, signinWithGithub } from '@/services/firebase';

export enum AuthProvider {
  GOOGLE,
  GITHUB
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
  return <button onClick={handleSubmit}>{children}</button>;
};
export default SignInWithProviderButton;

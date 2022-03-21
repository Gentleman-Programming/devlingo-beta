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
    let appUser;
    switch (provider) {
      case AuthProvider.GOOGLE:
        appUser = await createAddaptedUser(await signinWithGoogle());
        console.log(appUser);
        break;
      case AuthProvider.GITHUB:
        appUser = await createAddaptedUser(await signinWithGithub());
        console.log(appUser);
        break;
    }
  };
  return <button onClick={handleSubmit}>{children}</button>;
};
export default SignInWithProviderButton;

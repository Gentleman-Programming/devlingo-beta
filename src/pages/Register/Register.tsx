import { createAddaptedUser } from '@/adapters';
import { Input } from '@/components';
import { InputType } from '@/components/Input';
import SignInWithProviderButton, { AuthProvider } from '@/components/SignInWithProviderButton';
import { useYupValidationResolver } from '@/hooks';
import { User } from '@/models';
import { signup } from '@/services/firebase';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup.string().email().required('Required'),
  password: yup.string().min(6).required('Required')
});

const Register = () => {
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
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input register={register} name="email" type={InputType.TEXT} label="email" errors={errors} />
        <Input register={register} name="password" type={InputType.PASSWORD} label="password" errors={errors} />
        <button>{t('register.createAccount')}</button>
      </form>
      <SignInWithProviderButton provider={AuthProvider.GOOGLE}>{t('register.signinWithGoogle')}</SignInWithProviderButton>
      <SignInWithProviderButton provider={AuthProvider.GITHUB}>{t('register.signinWithGithub')}</SignInWithProviderButton>
    </section>
  );
};

export default Register;

import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import { RouterGuard } from '@/components';
import AuthRouter from './AuthRoutes.router';
import { useSelector } from 'react-redux';
import { FirebaseUser } from '@/models';
import { verifyUser } from '@/utilities';

const Login = lazy(() => import('@/pages/Login/Login'));
const Register = lazy(() => import('@/pages/Register/Register'));
const Home = lazy(() => import('@/pages/Home/Home'));

/*
  usuario de prueba:
  test@gmail.com
  Testapp2102$
*/

type prop = {
  user: FirebaseUser;
};

const AppRouter = () => {
  const user = useSelector(({ user }: prop) => user);
  const isUserLoggedIn = () => !verifyUser(user);
  const notUserLoggedIn = () => verifyUser(user);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<RouterGuard isValid={isUserLoggedIn} replaceLink="/dashboard" />}>
        <Route path={'login'} element={<Login />} />
        <Route path={'register'} element={<Register />} />
      </Route>
      <Route element={<RouterGuard isValid={notUserLoggedIn} replaceLink="/login" />}>
        <Route path={'*'} element={<AuthRouter />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

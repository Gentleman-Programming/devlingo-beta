import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import PublicRoutes from './PublicRouter.router';
import PrivateRoutes from './PrivateRouter.router';
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
  const log = verifyUser(user);

  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route
        path={'login'}
        element={
          <PublicRoutes log={log}>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path={'register'}
        element={
          <PublicRoutes log={log}>
            <Register />
          </PublicRoutes>
        }
      />
      <Route
        path={'*'}
        element={
          <PrivateRoutes log={log}>
            <AuthRouter />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRouter;

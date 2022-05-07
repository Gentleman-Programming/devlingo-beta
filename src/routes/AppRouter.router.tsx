import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import PublicRoutes from './PublicRouter.router';
import PrivateRoutes from './PrivateRouter.router';
import AuthRouter from './AuthRoutes.router';
import { useSelector } from 'react-redux';
import { FirebaseUser } from '@/models';

const Login = lazy(() => import('@/pages/Login/Login'));
const Register = lazy(() => import('@/pages/Register/Register'));
const Home = lazy(() => import('@/pages/Home/Home'));

/*
  usuario de prueba:
  test@gmail.com
  Testapp2102$
*/

const AppRouter = () => {
  const user = useSelector(({ user }: any) => user);

  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route
        path={'login'}
        element={
          <PublicRoutes user={user}>
            <Login />
          </PublicRoutes>
        }
      />
      <Route
        path={'register'}
        element={
          <PublicRoutes user={user}>
            <Register />
          </PublicRoutes>
        }
      />
      <Route
        path={'*'}
        element={
          <PrivateRoutes user={user}>
            <AuthRouter />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRouter;

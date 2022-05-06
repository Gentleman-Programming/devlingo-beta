import { Routes, Route } from 'react-router';
import { lazy, useEffect, useState } from 'react';
import PublicRoutes from './PublicRouter.router';
import PrivateRoutes from './PrivateRouter.router';
import AuthRouter from './AuthRoutes.router';
import { auth } from '@/services';
import { useDispatch } from 'react-redux';
import { createAddaptedUser } from '@/adapters';
import { createUser } from '@/redux/states/user';

const Login = lazy(() => import('@/pages/Login/Login'));
const Register = lazy(() => import('@/pages/Register/Register'));
const Home = lazy(() => import('@/pages/Home/Home'));

/*
  usuario de prueba:
  test@gmail.com
  Testapp2102$
*/

const AppRouter = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const formatUser = await createAddaptedUser(user);
        dispatch(createUser(formatUser));
        setLog(true);
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

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

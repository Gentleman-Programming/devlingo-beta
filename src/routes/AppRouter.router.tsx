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
const ControlPanel = lazy(() => import('@/pages/ControlPanel/ControlPanel'));

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
  const isUserLoggenIn = verifyUser(user);

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<PublicRoutes isUserLoggenIn={isUserLoggenIn} />}>
        <Route path={'login'} element={<Login />} />
        <Route path={'register'} element={<Register />} />
      </Route>
      <Route element={<PrivateRoutes isUserLoggenIn={isUserLoggenIn} />}>
        <Route path={'*'} element={<AuthRouter />} />
        <Route path={'admin'} element={<ControlPanel />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

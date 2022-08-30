import { FirebaseUser } from '@/models';
import { verifyUser } from '@/utilities';
import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import PrivateRoutes from './PrivateRouter.router';
import PublicRoutes from './PublicRouter.router';

const Login = lazy(() => import('@/pages/Login/Login'));
const Register = lazy(() => import('@/pages/Register/Register'));
const Home = lazy(() => import('@/pages/Home/Home'));
const ControlPanel = lazy(() => import('@/pages/ControlPanel/ControlPanel'));
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));

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
      <Route path="/" element={<Navigate to={`dashboard`} />} />
      <Route path={'home'} element={<Home />} />
      <Route element={<PublicRoutes isUserLoggenIn={isUserLoggenIn} />}>
        <Route path={'login'} element={<Login />} />
        <Route path={'register'} element={<Register />} />
      </Route>
      <Route element={<PrivateRoutes isUserLoggenIn={isUserLoggenIn} />}>
        <Route path={'dashboard/*'} element={<Dashboard />} />
        <Route path={'*'} element={<h2>404 - Not Found</h2>} />
        <Route path={'admin'} element={<ControlPanel />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

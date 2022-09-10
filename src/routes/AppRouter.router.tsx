import { Routes, Route } from 'react-router';
import { lazy } from 'react';
import AuthRouter from './AuthRoutes.router';

const Home = lazy(() => import('@/pages/Home/Home'));

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={'*'} element={<AuthRouter />} />
    </Routes>
  );
};

export default AppRouter;

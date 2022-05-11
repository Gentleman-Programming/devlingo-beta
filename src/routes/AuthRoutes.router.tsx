import { Routes, Route } from 'react-router';
import { lazy } from 'react';

const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path={'dashboard/*'} element={<Dashboard />} />
      <Route path={'*'} element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
};

export default AuthRouter;

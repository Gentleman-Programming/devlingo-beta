import { lazy } from 'react';
import { Routes, Route } from 'react-router';

const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const ControlPanel = lazy(() => import('@/pages/ControlPanel/ControlPanel'));
const Questions = lazy(() => import('@/pages/Questions/Questions'));
const Results = lazy(() => import('@/pages/Results/Results'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path={'dashboard/*'} element={<Dashboard />} />
      <Route path={'admin'} element={<ControlPanel />} />
      <Route path={'question/:id'} element={<Questions />} />
      <Route path={'results'} element={<Results />} />
      <Route path={'*'} element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
};

export default AuthRouter;

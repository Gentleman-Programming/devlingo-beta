import { lazy } from 'react';
import { Routes, Route } from 'react-router';

import { useUser } from '@/hooks';
import { verifyExistSeniority } from '@/utilities';
import { QuestionProvider } from '@/contexts';
import { RouterGuard } from '@/components';

const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const ControlPanel = lazy(() => import('@/pages/ControlPanel/ControlPanel'));
const Questions = lazy(() => import('@/pages/Questions/Questions'));
const Results = lazy(() => import('@/pages/Results/Results'));

const AuthRouter = () => {
  const { user } = useUser();
  const isExistSeniority = () => !verifyExistSeniority(user.seniorityGlobal as string);
  const notExistSeniority = () => verifyExistSeniority(user.seniorityGlobal as string);
  return (
    <Routes>
      <Route element={<RouterGuard isValid={isExistSeniority} replaceLink="/results" />}>
        <Route path={'dashboard/*'} element={<Dashboard />} />
        <Route
          path={'question/:id'}
          element={
            <QuestionProvider>
              <Questions />
            </QuestionProvider>
          }
        />
      </Route>

      <Route element={<RouterGuard isValid={notExistSeniority} replaceLink="/question/1" />}>
        <Route path={'results'} element={<Results />} />
      </Route>

      <Route path={'admin'} element={<ControlPanel />} />
      <Route path={'*'} element={<h2>404 - Not Found</h2>} />
    </Routes>
  );
};

export default AuthRouter;

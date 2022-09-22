import { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { verifyExistSeniority } from '@/utilities/verifyUser.utility';
import { QuestionProvider } from '@/contexts';
import { FirebaseUser } from '@/models';
import { RouterGuard } from '@/components';

const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const ControlPanel = lazy(() => import('@/pages/ControlPanel/ControlPanel'));
const Questions = lazy(() => import('@/pages/Questions/Questions'));
const Results = lazy(() => import('@/pages/Results/Results'));

type prop = {
  user: FirebaseUser;
};

const AuthRouter = () => {
  const { seniorityGlobal } = useSelector(({ user }: prop) => user);
  const isExistSeniority = () => !verifyExistSeniority(seniorityGlobal as string);
  const notExistSeniority = () => verifyExistSeniority(seniorityGlobal as string);
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

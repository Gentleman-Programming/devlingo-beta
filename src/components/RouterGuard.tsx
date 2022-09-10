import { Navigate, Outlet } from 'react-router';

type props = {
  isValid: Function;
  replaceLink: string;
};

const RouterGuard = ({ isValid, replaceLink }: props): JSX.Element => {
  if (!isValid()) {
    return <Navigate to={`${replaceLink}`} replace />;
  }
  return <Outlet />;
};

export default RouterGuard;

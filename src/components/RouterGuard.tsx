import { Navigate, Outlet } from 'react-router';
import { AuthFlag } from '../utilities';

type props = {
  isValid: Function;
  replaceLink: string;
};

const RouterGuard = ({ isValid, replaceLink }: props): JSX.Element => {
  if (!AuthFlag) {
    return <Outlet />;
  } else {
    if (!isValid()) {
      return <Navigate to={`${replaceLink}`} replace />;
    }
    return <Outlet />;
  }
};

export default RouterGuard;

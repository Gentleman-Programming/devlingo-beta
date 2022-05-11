import { Navigate, Outlet } from 'react-router';

type props = {
  log: Boolean;
  children: JSX.Element;
};

const PublicRoutes = ({ log, children }: props): JSX.Element => {
  if (log) {
    return <Navigate to="/dashboard" replace />;
  }
  return children ? children : <Outlet />;
};

export default PublicRoutes;

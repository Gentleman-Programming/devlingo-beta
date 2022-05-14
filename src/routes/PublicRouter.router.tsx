import { Navigate, Outlet } from 'react-router';

type props = {
  isUserLoggenIn: Boolean;
};

const PublicRoutes = ({ isUserLoggenIn }: props): JSX.Element => {
  if (isUserLoggenIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;

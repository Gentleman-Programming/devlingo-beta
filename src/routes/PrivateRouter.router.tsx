import { Navigate, Outlet } from 'react-router';

type props = {
  isUserLoggenIn: Boolean;
};

const PrivateRoutes = ({ isUserLoggenIn }: props): JSX.Element => {
  if (!isUserLoggenIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;

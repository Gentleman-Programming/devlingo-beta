import { Navigate } from 'react-router';

type props = {
  log: Boolean;
  children: JSX.Element;
};

const PrivateRoutes = ({ log, children }: props): JSX.Element => {
  if (!log) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoutes;

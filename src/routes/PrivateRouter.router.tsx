import { Navigate } from 'react-router';

type props = {
  log: Boolean;
  children: JSX.Element;
};

const PrivateRoutes = ({ log, children }: props) => (!log ? <Navigate to="/login" /> : children);

export default PrivateRoutes;

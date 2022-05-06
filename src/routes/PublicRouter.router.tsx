import { Navigate } from 'react-router';

type props = {
  log: Boolean;
  children: JSX.Element;
};

const PublicRoutes = ({ log, children }: props) => (log ? <Navigate to="/dashboard" /> : children);

export default PublicRoutes;

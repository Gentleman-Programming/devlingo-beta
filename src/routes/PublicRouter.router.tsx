import { FirebaseUser } from '@/models';
import { Navigate } from 'react-router';

type props = {
  user: FirebaseUser;
  children: JSX.Element;
};

const PublicRoutes = ({ user, children }: props) => {
  if (user.email || user.accessToken || user.uid) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

export default PublicRoutes;

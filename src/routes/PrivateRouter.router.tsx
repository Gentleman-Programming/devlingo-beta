import { FirebaseUser } from '@/models';
import { Navigate } from 'react-router';

type props = {
  user: FirebaseUser;
  children: JSX.Element;
};

const PrivateRoutes = ({ user, children }: props) => {
  if (!user.email || !user.uid || !user.accessToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoutes;

import { useSelector, useDispatch } from 'react-redux';

import { AppStore } from '@/redux/store';
import { createUser, modifyUser, resetUser } from '@/redux';
import { FirebaseUser } from '@/models';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ user }: AppStore) => user);

  const CreateUser = (user: FirebaseUser): void => {
    dispatch(createUser(user));
  };

  const ModifyUser = (user: FirebaseUser): void => {
    dispatch(modifyUser(user));
  };

  const ResetUser = (): void => {
    dispatch(resetUser());
  };

  return { user, CreateUser, ModifyUser, ResetUser };
};

import { User } from '@/models';
import axios from 'axios';

const apiUrl = 'http:gentlemanprogramming/';
const loginUrl = apiUrl + 'login';

/**
 * @desc log in.
 * @param email- the users email.
 * @param password - the users password.
 * @return Observable<User>
 */
export const login = (email: string, password: string): User => {
  return axios.post<User>(loginUrl, { email, password });
};

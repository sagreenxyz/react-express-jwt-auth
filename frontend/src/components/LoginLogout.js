import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { SignUp } from './SignUp';
import { LogIn } from './LogIn';
import { LogOut } from './LogOut';

export function LoginLogout() {
  const { authorized } = useContext(AuthContext);
  return (
    <>
      <h2>Authentication Status</h2>
      {authorized
        ? <LogOut />
        : <>
          <LogIn />
          <SignUp />
        </>
      }
    </>
  );
}

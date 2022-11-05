import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function AuthStatus() {
  const { authorized } = useContext(AuthContext);
  return (
    <>
      <h2>Authentication Status</h2>
      {authorized
        ? 'You are logged in.'
        : 'You are NOT logged in...'}
    </>
  );
}

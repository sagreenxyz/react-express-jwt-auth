import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function LogOut() {
  const { setAuthorized } = useContext(AuthContext);
  const onClickHandler = () => {
    setAuthorized(false);
  };
  return (
    <>
      <h2>Log Out</h2>
      <button onClick={onClickHandler}>Log Out</button>
    </>
  );
}

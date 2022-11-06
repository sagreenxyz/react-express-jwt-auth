import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export function LogOut() {
  const { setAuthorized } = useContext(AuthContext);
  const navigate = useNavigate()
  const onClickHandler = () => {
    setAuthorized(false);
    navigate('/')
  };
  return (
    <>
      <h2>Log Out</h2>
      <button onClick={onClickHandler}>Log Out</button>
    </>
  );
}

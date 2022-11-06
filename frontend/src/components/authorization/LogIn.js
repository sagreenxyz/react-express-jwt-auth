import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export function LogIn() {
  const { setAuthorized } = useContext(AuthContext);
  const navigate = useNavigate()
  const onSubmitHandler = e => {
    e.preventDefault();
    setAuthorized(true);
    navigate('/authorized')
  };
  const onNewUserClickHandler = () => {
    navigate('/signup')
  }
  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="userName" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <input type="submit" value="Log In" />
      </form>
      <button onClick={onNewUserClickHandler}>New User</button>
    </>
  );
}

import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function LogIn() {
  const { setAuthorized } = useContext(AuthContext);
  const onSubmitHandler = e => {
    e.preventDefault();
    setAuthorized(true);
  };
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
    </>
  );
}

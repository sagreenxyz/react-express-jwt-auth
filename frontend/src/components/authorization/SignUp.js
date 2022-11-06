import { useNavigate } from 'react-router-dom';

export function SignUp() {
  const navigate = useNavigate()
  const onSubmitHandler = e => {
    e.preventDefault()
    navigate('/')
  }
  const onCancelClickHandler = () => {
    navigate('/')
  }
  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="userName" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <label htmlFor="passwordAgain">Type In Password Again:</label>
          <input type="password" id="passwordAgain" name="passwordAgain" />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
      <button onClick={onCancelClickHandler}>Cancel</button>
    </>
  );
}

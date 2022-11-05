export function SignUp() {
  return (
    <>
      <h2>Sign Up</h2>
      <form>
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
        <input type="submit" />
      </form>
    </>
  );
}

import { useState } from 'react'

function AuthStatus({ authorized }) {
  return (
    <>
      <h2>Authentication Status</h2>
      {authorized
        ? 'You are logged in.'
        : 'You are NOT logged in...'
      }
    </>
  )
}

function SignUp() {
  return (
    <>
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="userName" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <label htmlFor="password">Type In Password Again:</label>
        <input type="password" id="password" name="password" />
      </div>
      <input type="submit" />
    </>
  )
}

function LogIn() {
  return (
    <>
      <h2>Log In</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="userName" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <input type="submit" />
    </>
  )
}

function LogOut() {
  return (
    <>
      <h2>Log Out</h2>
      <button>Log Out</button>
    </>
  )
}

function App() {
  const [authorized, setAuthorized] = useState(true)
  return (
    <div>
      <h1>React Express Authentication/Authorization Example</h1>
      <AuthStatus authorized={authorized} />
      <SignUp />
      <LogIn />
      <LogOut />
    </div>
  );
}

export default App;

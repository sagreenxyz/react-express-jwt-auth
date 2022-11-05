import { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [authorized, setAuthorized] = useState(true)
  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthContext.Provider>
  )
}

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
  return (
    <div>
      <h1>React Express Authentication/Authorization Example</h1>
      <AuthContextProvider>
        <AuthStatus />
        <SignUp />
        <LogIn />
        <LogOut />
      </AuthContextProvider>
    </div>
  );
}

export default App;

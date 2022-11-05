import { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const [authorized, setAuthorized] = useState()
  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthContext.Provider>
  )
}

function AuthStatus() {
  const { authorized } = useContext(AuthContext)
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
  )
}

function LogIn() {
  const { setAuthorized } = useContext(AuthContext)
  const onSubmitHandler = e => {
    e.preventDefault()
    setAuthorized(true)
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
    </>
  )
}

function LogOut() {
  const { setAuthorized } = useContext(AuthContext)
  const onClickHandler = () => {
    setAuthorized(false)
  }
  return (
    <>
      <h2>Log Out</h2>
      <button onClick={onClickHandler}>Log Out</button>
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

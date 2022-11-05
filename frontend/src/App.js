import { AuthContextProvider } from './components/AuthContext'
import { LoginLogout } from './components/LoginLogout'
import { LogIn } from './components/LogIn'
import { LogOut } from './components/LogOut'
import { SignUp } from './components/SignUp'

function App() {
  return (
    <div>
      <h1>React Express Authentication/Authorization Example</h1>
      <AuthContextProvider>
        <LoginLogout />
      </AuthContextProvider>
    </div>
  );
}

export default App;

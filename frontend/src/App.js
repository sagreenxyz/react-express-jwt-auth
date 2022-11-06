import { AuthContextProvider } from './components/AuthContext'
import { LogIn } from './components/LogIn';
import { LogOut } from './components/LogOut';
import { SignUp } from './components/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>React Express Authentication/Authorization Example</h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/authorized" element={<LogOut />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom'
import logo from './logo.svg';
import LoginForm from './Components/LoginForm/LoginForm'
import Navbar from './Components/NavbarLogin/NavbarLogin';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginPage from './Pages/LoginPage/LoginPage';
import Homepage from './Pages/Homepage/Homepage';


function App() {
  return (
    <div>
      <main className="App">
        <Router>
          <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route path='/login' Component={LoginPage} />
          <Route path='/register' Component={RegisterForm} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

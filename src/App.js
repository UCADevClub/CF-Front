import {BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom'
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Homepage from './Pages/Homepage/Homepage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import FAQPage from './Pages/FAQPage/FAQPage';

function App() {
  return (
    <div>
      <main className="App">
        <Router>
          <Routes>
            <Route exact path='/' Component={Homepage} />
            <Route path='/login' Component={LoginPage} />
            <Route path='/register' Component={RegisterPage} />
            <Route path='/about' Component={AboutPage} />
            <Route path='/contacts' Component={ContactPage} />
            <Route path='/faq' Component={FAQPage} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;

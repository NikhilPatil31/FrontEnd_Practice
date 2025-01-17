import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import Counter from './Counter';
import EmployeeForm from './EmployeeForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import RouterExp from './RouterExp';
import Display from './Display';
import LogIn from './LogIn';
import ContextExp from './ContextExp';
import {useEffect, useState} from 'react';
import ApiLoad from './ApiLoad';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  }

  const logout = () => {
    setIsAuthenticated(false);
  }

  useEffect(()=>{
    console.log(isAuthenticated);
  })

  return (
    <div className="App" style={{border:'none'}}>
      {/* <Router>
        <Routes>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
            <Route path='/display' element={<Display logout={logout}/>}></Route>
          </Route>
          <Route path='/' element={<EmployeeForm />}></Route>
          <Route path='/login' element={<LogIn login={login}/>}></Route>

        </Routes>
      </Router> */}
      
      {/* <EmployeeForm /> */}
      {/* <RouterExp /> */}
      <ApiLoad />


    </div>
  );
}

/*<header className="App-header"> 
        <Hello name="Nikhil" message="How Are You?"/>
  </header>*/

export default App
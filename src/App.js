import styles from './App.module.css';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';


function App() {
  const [auth,setAuth] = useState(false);
  
  useEffect(() => {
    localStorage.getItem('Username') && setAuth(true) 
  },[]);

  return (
    <div className={styles.App}>
      <h1>EXPENSE TRACKER APP</h1>
      <Routes>
        <Route path='/' element={ auth ? <HomePage/> : <Register/>}/>
        <Route path='/register' index element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;

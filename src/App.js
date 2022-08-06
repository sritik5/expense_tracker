import styles from './App.module.css';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';


function App() {
  const [auth,setAuth] = useState(false);
  
  useEffect(() => {
    console.log("App.js file")
    localStorage.getItem('Username') && setAuth(true) 
  },[]);

  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={ auth ? <HomePage/> : <Register/>}/>
        <Route path='/register' index element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;

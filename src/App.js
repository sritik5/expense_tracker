//import logo from './logo.svg';
import styles from './App.module.css';
import HomePage from './components/HomePage';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
  
      <HomePage/>
      

    </div>
  );
}

export default App;

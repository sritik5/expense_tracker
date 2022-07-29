import logo from './logo.svg';
import styles from './App.module.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className={styles.App}>
      <h1>EXPENSE TRACKER APP</h1>
      <div className="App">
        {/* <Register/> */}
      <Login/>
      </div>

    </div>
  );
}

export default App;

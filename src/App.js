import logo from './logo.svg';
import styles from './App.module.css';
import Register from './components/Register';

function App() {
  return (
    <div className={styles.App}>
      <h1>EXPENSE TRACKER APP</h1>
      <div className="App"><Register/></div>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Horse Racing</h1>
        <div className="Players">
        <h3>
          Number of Players: 
        </h3>
        <input type="text" name="name" />
        <button>Start</button>
        </div>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to Play
        </a>
      </header>
    </div>
  );
}

export default App;

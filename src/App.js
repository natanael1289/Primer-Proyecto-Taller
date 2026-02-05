import logo from './logo.svg';
import './App.css';
import PrimerComponente from './Components/PrimerComponente';
function App() {
  const Saludo = "Buen día";
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {Saludo}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <PrimerComponente />
    </>
  );
}

export default App;

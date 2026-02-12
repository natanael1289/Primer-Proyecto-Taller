import logo from './logo.svg';
import './App.css';
import PrimerComponente from './Components/PrimerComponente';
import  Contador  from './Components/Contador';
import Text from './Components/Text';
import ContConLimite from './Components/ContConLimite.js';

function App() {    
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Contador />    
        <br />
        <Text />  
        <br />
        <ContConLimite />
      </header>
    </div>
    <PrimerComponente />
    </>
  );
}

export default App;

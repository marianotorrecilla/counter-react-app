import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter"

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Counter React App</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Counter initialCount={0}/>
        </header>
      </div>
      
    </>
    

  );
}

export default App;

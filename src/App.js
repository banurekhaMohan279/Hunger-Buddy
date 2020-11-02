import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
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
      </header> */}

      <section className="loginContainer">
        <div className="login">
          <form>
              <input type="text" placeholder="User Name"/>
              <input type="password" placeholder="Password"/>
              <input type="submit"/>
          </form>
          </div>
      </section>

    </div>
  );
}

export default App;

import './App.css';
import {useHistory} from 'react-router-dom';

function App() {
  let history = useHistory();
  console.log("history..",history);
  function goToHomePage(event){
    event.preventDefault();
    history.push('/Home');
  }

  return (
    <div className="App">
      <section className="loginContainer">
        <div className="login">
          <header>Food Delivery App Login</header>
          <form onSubmit = {goToHomePage}>
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
/*
New modules
redux, react-redux, react-router-dom

Notes/Revisit
1. Centering nested children with flexbox
2. React-router vs React-router-dom
  https://reactrouter.com/web/guides/quick-start
  https://codeburst.io/getting-started-with-react-router-5c978f70df91
3. Provider makes redux store available to nested components wrapped in connect() function
  https://react-redux.js.org/api/provider
*/

import './App.css';
import {useHistory} from 'react-router-dom';

function App() {
  let history = useHistory();
  console.log("history..",history)
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

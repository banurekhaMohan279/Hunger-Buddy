import {useHistory} from 'react-router-dom';

export default function AppHeader (){

  let history = useHistory();

  function gotoHome(){
    history.push('/Location');
  }

  return (
    <header className = "AppHeader" onClick = {gotoHome}>
      Hunger Buddy
      <span> A Foodie's Best Friend </span>
    </header>
  )
}

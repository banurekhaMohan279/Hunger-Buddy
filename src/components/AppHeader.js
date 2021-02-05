import {useHistory} from 'react-router-dom';
import styles from '../App.module.css';

export default function AppHeader (){

  let history = useHistory();

  function gotoHome(){
    history.push('/Location');
  }

  return (
    <header className = {styles.AppHeader} onClick = {gotoHome}>
      Hunger Buddy
      <span> A Foodie's Best Friend </span>
    </header>
  )
}

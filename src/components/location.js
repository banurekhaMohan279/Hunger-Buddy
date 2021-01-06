/** Restructuring the document for React Hooks ***/
import React, {useState} from 'react';
import getCities from '../actions/cities';
import AppHeader from './AppHeader';
import {connect, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Location() {
  const [location, setLocation] = useState('');
  let history = useHistory();
  let dispatch = useDispatch();

  function locationSubmit(event) {
    event.preventDefault();
    dispatch(getCities({location})).then( () => {history.push('/Restaurants')} );
  }

  function locationChange(event){
    let loc = event.target.value;
    setLocation(loc);
  }

    return(
      <div className = "homePage">
        <AppHeader/>
        <form onSubmit = {locationSubmit}>
          <input type = "text" className = "cityName" placeholder = "Enter your location.."
          onChange = {locationChange}/>
          <input type = "submit" value = "Go"/>
        </form>
      </div>
    )
}


export default Location;

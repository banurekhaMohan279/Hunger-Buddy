import React from 'react';
import {getAllRestaurants} from '../actions/restaurants';
import getCities from '../actions/cities';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Location extends React.Component{
  constructor(props){
      super(props);
      this.state = {location : ''};
      this.locationSubmit = this.locationSubmit.bind(this);
      this.locationChange = this.locationChange.bind(this);
  }

  componentDidMount(){
      //this.props.dispatch(getAllRestaurants())
      //.then(() => console.log("categories",this.props.categories));
  }

  locationSubmit(event) {
    event.preventDefault();
    this.props.dispatch(getCities(this.state.location)).then( () => {this.props.history.push('/Restaurants')} );
  }

  locationChange(event){
    let loc = event.target.value;
    this.setState ({location:loc});
  }

  render(){
    return(
      <div className = "homePage">
        <header> Food Delivery App </header>
        <form onSubmit = {this.locationSubmit}>
          <input type = "text" className = "cityName" placeholder = "Enter your location.." onChange = {this.locationChange}/>
          <input type = "submit" value = "Go"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    cities : state.getCitiesReducer.cities
  }
}

export default withRouter(connect(mapStateToProps)(Location));

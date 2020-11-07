import React from 'react';
import {getRestaurantCategories} from '../actions/restaurants';
import getCities from '../actions/cities';
import {connect} from 'react-redux';

class Location extends React.Component{
  constructor(props){
      super(props);
      this.state = {location : ''};
      this.locationSubmit = this.locationSubmit.bind(this);
      this.locationChange = this.locationChange.bind(this);
  }

  componentDidMount(){
      this.props.dispatch(getRestaurantCategories())
      .then(() => console.log("categories",this.props.categories));
  }

  locationSubmit(event) {
    event.preventDefault();
    this.props.dispatch(getCities(this.state.location)).then(()=>console.log("city details",this.props.cities))
  }

  locationChange(event){
    let loc = event.target.value;
    this.setState ({location:loc});
    console.log("state",this.state);
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
    categories : state.restaurantsReducer.categories, // check how reducer accessed here
    cities : state.getCitiesReducer.cities
  }
}

export default connect(mapStateToProps)(Location);

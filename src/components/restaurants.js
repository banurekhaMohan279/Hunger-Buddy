import React from 'react';
import {connect} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';
import {getRestaurantDetails} from '../actions/restaurantDetails';
import AppHeader from './AppHeader';
import {withRouter} from 'react-router-dom';

class Restaurants extends React.Component{
  constructor(props){
    super(props);
    this.getRestaurantDetails = this.getRestaurantDetails.bind(this);
  }

  componentDidMount(){
    let city = this.props.cities["location_suggestions"][0]["entity_id"];
    this.props.dispatch(getAllRestaurants(city));
  }

  getRestaurantDetails(res_id){
      this.props.dispatch(getRestaurantDetails(res_id)).then (() => {
        this.props.history.push('/RestaurantDetails');
      });
  }

  render(){
    let restaurants = this.props.restaurants && this.props.restaurants.restaurants;
    return(
      <div className = "retaurantsPage">
          <AppHeader/>
          <div className = "restaurantList">
            {restaurants &&
              restaurants.map ( (item,index) => {
                return  (
                  <div className = "restaurant" key = {"restaurant"+index}
                  onClick = {(e) => this.getRestaurantDetails(item.restaurant.R.res_id)}>
                    <img src = {item.restaurant.thumb} alt = {item.restaurant.name} className = "restaurantThumbNail" />
                    <h4 className = "restaurantName"> {item.restaurant.name} </h4>
                    <span>☆{item.restaurant.user_rating.aggregate_rating}</span>
                  </div>
                );
              })
            }
          </div>
      </div>

    )
  }

}

function mapStateToProps(state){
  return{
    restaurants : state.restaurantsReducer.restaurants,
    cities: state.getCitiesReducer.cities
  }
}

export default withRouter(connect(mapStateToProps)(Restaurants));

import React from 'react';
import {connect} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';
import AppHeader from './AppHeader';

class Restaurants extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getAllRestaurants());
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
                  <div className = "restaurant" key = {"restaurant"+index}>
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

export default connect(mapStateToProps)(Restaurants);

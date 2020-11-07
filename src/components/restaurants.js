import React from 'react';
import {connect} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';

class Restaurants extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getAllRestaurants());
  }



  render(){
    let restaurants = this.props.restaurants && this.props.restaurants.restaurants;
    console.log("restaurants",restaurants);
    return(
      <div className = "restaurantList">
        {restaurants &&
          restaurants.map ( (item,index) => {
            return  (
              <div className = {"restaurant restaurant"+index}>
                <img src = {item.restaurant.thumb} alt = {item.restaurant.name} className = "restaurantThumbNail" />
                <h4 className = "restaurantName"> {item.restaurant.name} </h4>
              </div>
            );
          })
        }
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

import React, {useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';
import {getRestaurantDetails} from '../actions/restaurantDetails';
import AppHeader from './AppHeader';
import {useHistory} from 'react-router-dom';

function Restaurants() {
  let dispatch = useDispatch();
  let history = useHistory();
  let restaurants = useSelector(state => state.restaurantsReducer.restaurants && state.restaurantsReducer.restaurants.restaurants);
  let city = useSelector(state => state.getCitiesReducer.cities["location_suggestions"][0]["entity_id"]);
  console.log("restaurants",restaurants);

  useEffect(() =>{
    dispatch(getAllRestaurants(city));
  },[]);

  function getRestaurantDetails(res_id){
      dispatch(getRestaurantDetails(res_id)).then (() => {
        history.push('/RestaurantDetails');
      });
  }

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

export default Restaurants;

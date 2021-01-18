import React, {useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';
import {getRestaurantDetails} from '../actions/restaurantDetails';
import AppHeader from './AppHeader';
import {useHistory} from 'react-router-dom';

function Restaurants() {
  let dispatch = useDispatch();
  let history = useHistory();
  const [page, setPage] = useState(0);
  let restaurants = useSelector(state => state.restaurantsReducer.restaurants);
  let city = useSelector(state => state.getCitiesReducer.cities["location_suggestions"][0]["entity_id"]);

  useEffect(() =>{
    dispatch(getAllRestaurants(city,page,'initLoad')).then(()=>{ // update page number after first load, else page no. updates before mount on seeing loading div
      console.log("after mount");
      var options = {
         root: null,
         rootMargin: "20px",
         threshold: 1.0
      };
     // initialize IntersectionObserver and attaching to Load More div
      const observer = new IntersectionObserver(handleObserver, options);
      console.log("loader",loader,loader.current);
      if (loader.current) {
         observer.observe(loader.current)
      }
    })// overwrite restaurants state on load
  },[]);

  function getRestaurantDetails(res_id){
      dispatch(getRestaurantDetails(res_id)).then (() => {
        history.push('/RestaurantDetails');
      });
  }

  /**** Infinite Scroll ******/
  // styling post container
  const divStyle = {
      height: '250px'
  };

  // styling container wrapper
  const containerStyle = {
      maxWidth: '1280px',
      margin: '0 auto'
  }
  // add loader refrence
  const loader = useRef(null);

  // Similar to componentDidUpdate - updates whenever page state is changed / dispatch can also be added inside setTimeout
  useEffect(() => {
      console.log("componentDidUpdate",page);
      dispatch(getAllRestaurants(city,page,'notInitLoad')); // concat restaurants state on subsequent loads
  }, [page]);

  // here we handle what happens when user scrolls to Load More div - in this case we just update page variable
  const handleObserver = (entities) => {
      const target = entities[0]; // target is the loading div
      if (target.isIntersecting) {
          //setTimeout (() => setPage((page) => page + 1),2000);
          setPage((page) => page + 1);
      }
  }

  return(
      <div className = "retaurantsPage">
          <AppHeader/>
          <div className = "restaurantList" style ={containerStyle}>
            {restaurants &&
              restaurants.map ( (item,index) => {
                return  (
                  <div className = "restaurant" key = {"restaurant"+index} style = {divStyle}
                  onClick = {(e) => getRestaurantDetails(item.restaurant.R.res_id)}>
                    <img src = {item.restaurant.thumb} alt = {item.restaurant.name} className = "restaurantThumbNail" />
                    <h4 className = "restaurantName"> {item.restaurant.name} </h4>
                    <span>☆{item.restaurant.user_rating.aggregate_rating}</span>
                  </div>
                );
              })
            }
          </div>
          <div className="loading" ref={loader}>
                    <h2>Loading...</h2>
          </div>
      </div>
    )
}

export default Restaurants;

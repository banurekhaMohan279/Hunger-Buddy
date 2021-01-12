import React, {useEffect, useState, useRef} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';
import {getRestaurantDetails} from '../actions/restaurantDetails';
import AppHeader from './AppHeader';
import {useHistory} from 'react-router-dom';

function Restaurants() {

  // styling post container
  const divStyle = {
      height: '250px'
  };

  // styling container wrapper
  const containerStyle = {
      maxWidth: '1280px',
      margin: '0 auto'
  }

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

  const [postList, setPostList] = useState({
        list: [1,2,3,4]
    });
    // tracking on which page we currently are
    const [page, setPage] = useState(1);
    // add loader refrence
    const loader = useRef(null);

    useEffect(() => {
         var options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
         };
        // initialize IntersectionObserver
        // and attaching to Load More div
         const observer = new IntersectionObserver(handleObserver, options);
         if (loader.current) {
            observer.observe(loader.current)
         }

    }, []);


    useEffect(() => {
        // here we simulate adding new posts to List
        const newList = postList.list.concat([1,1,1,1]);
        setPostList({
            list: newList
        })
    }, [page])

    // here we handle what happens when user scrolls to Load More div
   // in this case we just update page variable
    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setTimeout (() => setPage((page) => page + 1),2000);
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
                    <h2>Load More</h2>
          </div>
      </div>
    )
}

export default Restaurants;

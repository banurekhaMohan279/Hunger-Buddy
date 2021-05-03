import React, {useEffect, useState, useRef} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {getAllRestaurants} from '../actions/restaurants';
import {getRestaurantDetails} from '../actions/restaurantDetails';
import AppHeader from './AppHeader';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import {useHistory} from 'react-router-dom';

function Restaurants() {
  let dispatch = useDispatch();
  let history = useHistory();
  const [page, setPage] = useState(0);
  let restaurants = useSelector(state => state.restaurantsReducer.restaurants);
  let cityId = JSON.parse(localStorage.getItem('locationId'));

  useEffect(() =>{
    dispatch(getAllRestaurants(cityId,page,'initLoad')).then(()=>{ // update page number after first load, else page no. updates before mount on seeing loading div
      var options = {
         root: null,
         rootMargin: "20px",
         threshold: 1.0
      };
      const observer = new IntersectionObserver(handleObserver, options);  // initialize IntersectionObserver and attaching to Load More div
      if (loader.current) {
         observer.observe(loader.current)
      }
    })// overwrite restaurants state on load
  },[]);

  /**** Infinite Scroll ******/
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
      dispatch(getAllRestaurants(cityId,page,'notInitLoad')); // concat restaurants state on subsequent loads
  }, [page]);

  // here we handle what happens when user scrolls to Load More div - in this case we just update page variable
  const handleObserver = (entities) => {
      const target = entities[0]; // target is the loading div
      if (target.isIntersecting) {
          setPage((page) => page + 1);
      }
  }

  function getRestaurantDetail(res_id){
      dispatch(getRestaurantDetails(res_id)).then (() => {
        history.push('/Hunger-Buddy/RestaurantDetails');
      });
  }

  return(
      <div className = "set-height restaurantsPage">
          <AppHeader/>
          <Container fluid style ={containerStyle}>
            <CardDeck>
            {restaurants &&
              restaurants.map ( (item,index) => {
                return  (
                  <Card style={{ minWidth: '18rem' }} key={"restaurant"+index}
                   onClick = {(e) => getRestaurantDetail(item.restaurant.R.res_id)}>
                      <Card.Img variant="top" src = {item.restaurant.thumb} alt = {item.restaurant.name}/>
                      <Card.Body>
                        <Card.Title>{item.restaurant.name}</Card.Title>
                        <Card.Text>☆{item.restaurant.user_rating.aggregate_rating}</Card.Text>
                      </Card.Body>
                    </Card>
                );
              })
            }
            </CardDeck>
          </Container>
          <div className="loading" ref={loader}>
                    <h2>Loading...</h2>
          </div>
      </div>
    )
}

export default Restaurants;

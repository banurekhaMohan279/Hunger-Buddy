import React from 'react';
import {connect} from 'react-redux';
import AppHeader from './AppHeader';

// on refresh needs another retsuarntdetails in compoentdidMount
class RestaurantDetails extends React.Component{

  render(){
    let restaurantDetails = this.props.restaurantDetails;
    return(
      <div className = "RestaurantDetails">
        <AppHeader/>

        <section className = "img-section">
          <img src = {restaurantDetails.featured_image} alt = {restaurantDetails.name}/>
        </section>

        <section className = "details-section">
          <h4> {restaurantDetails.name} </h4>
          <span> {restaurantDetails.timings} </span>
          <span> {restaurantDetails.cuisines} </span>
          <span> {restaurantDetails.phone_numbers} </span>
          <span> {restaurantDetails.location.address} </span>
          <div className = "rest-types">
            {restaurantDetails.establishment.map
              ((item) => <span className = "rest-type" key = "index"> {item} </span>) }
          </div>
        </section>

        <section className = "reviews-section">
        </section>
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    restaurantDetails : state.restaurantDetailsReducer.restaurantDetails
  }
}

export default connect(mapStateToProps)(RestaurantDetails);

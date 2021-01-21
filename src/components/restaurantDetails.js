import React from 'react';
import {connect} from 'react-redux';
import AppHeader from './AppHeader';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// on refresh needs another retsuarntdetails in compoentdidMount
class RestaurantDetails extends React.Component{

  render(){
    let restaurantDetails = this.props.restaurantDetails;
    return(
      <div className = "set-height RestaurantDetailsPage">
        <AppHeader/>
        <Container>
          <Row>
            <Col xs = {9}>
                <Image className = "rest-img" src = {restaurantDetails.featured_image} alt = {restaurantDetails.name} rounded />
            </Col>
            <Col xs = {3} className = "details-section">
              <h4> {restaurantDetails.name} </h4>
              <span> {restaurantDetails.timings} </span>
              <span> {restaurantDetails.cuisines} </span>
              <span> {restaurantDetails.phone_numbers} </span>
              <span> {restaurantDetails.location.address} </span>
              <div className = "rest-types">
                {restaurantDetails.establishment.map
                  ((item) => <span className = "rest-type" key = "index"> {item} </span>) }
              </div>
            </Col>
          </Row>
        </Container>
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

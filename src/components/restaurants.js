import React from 'react';
import {getRestaurantCategories} from '../actions/restaurants';
import {connect} from 'react-redux';

class Restaurants extends React.Component{
  constructor(props){
      super(props);
  }

  componentDidMount(){
      this.props.dispatch(getRestaurantCategories())
      .then(() => console.log(this.props.categories));
  }

  render(){
    return(
      <div className = "homePage">
        <header> Food Delivery App </header>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    categories : state.restaurantsReducer.categories // check how reducer accessed here
  }
}

export default connect(mapStateToProps)(Restaurants);

import React from 'react';
import {connect} from 'react-redux';

class RestaurantDetails extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div> Restaurant details </div>
    )
  }

}

function mapStateToProps(state){
  return {};
}

export default connect(mapStateToProps)(RestaurantDetails);

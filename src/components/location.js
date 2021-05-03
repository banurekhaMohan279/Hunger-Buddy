/** Restructuring the document for React Hooks ***/
import React, {useState} from 'react';
import getCities from '../actions/cities';
import AppHeader from './AppHeader';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Location() {
  const [location, setLocation] = useState('');
  let history = useHistory();
  let dispatch = useDispatch();

  function locationSubmit(event) {
    event.preventDefault();
    dispatch(getCities({location})).then( () => {
      history.push('/Hunger-Buddy/Restaurants')
    } );
  }

  function locationChange(event){
    let loc = event.target.value;
    setLocation(loc);
  }

    return(
      <div className = "set-height">
        <AppHeader/>
        <Container fluid className = "set-height">
          <Row className = "justify-content-center align-items-center set-height locationPage">
                <Form onSubmit = {locationSubmit}>
                  <Row>
                    <Col xs = {8}>
                      <Form.Group controlId="formLocation">
                        <Form.Control required size = "lg" type="text" placeholder="Enter Location.." onChange = {locationChange}/>
                      </Form.Group>
                    </Col>
                    <Col xs = {2}>
                      <Button variant="success" size = "lg" type = "submit">Go</Button>
                    </Col>
                  </Row>
                </Form>
            </Row>
          </Container>
      </div>
    )
}


export default Location;

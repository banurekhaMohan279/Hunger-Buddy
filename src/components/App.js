import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  console.log("in appp..")
  let history = useHistory();

  function goToHomePage(event){
    event.preventDefault();
    history.push('/Location');
  }

  return (
      <Container fluid className = "set-height">
        <Row className = "justify-content-md-center align-items-center set-height">
          <Row className="justify-content-md-center login-form">
            <Col xl>
              <header>Food Delivery App Login</header>
              <Form onSubmit = {goToHomePage}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Row>
      </Container>
  );
}

export default App;

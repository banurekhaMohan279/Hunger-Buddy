import {useHistory} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  let history = useHistory();

  function goToHomePage(event){
    event.preventDefault();
    history.push('/Hunger-Buddy/Location');
  }

  return (
      <Container className = "set-height">
        <Row className = "justify-content-center align-items-center set-height">
            <Col xs = {7} className = "login-form" >
              <div className = "text-center">
                <h4>Hunger Buddy</h4>
              </div>
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
                <div className = "text-center">
                  <Button variant="outline-success" size="lg" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
        </Row>
      </Container>
  );
}

export default App;

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function HomeBody() {
  return (
    <Row xs={1} md={1} className="g-4">
      
        <Col key={3}>
          <Card>
            <Card.Img variant="top" src="assets/inovation.jpg" />
            <Card.Body style={border}>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
      
    </Row>
  );
}
const border = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '55px',
    color: 'darkslategray'
  };
export default HomeBody;
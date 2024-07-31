import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Products({ data }) {

  const [isLoading, setLoading] = useState(false);

  const [menus, setMenus] = useState(data.products);

  

  useEffect(() => {
    function simulateNetworkRequest() {
      //make fetch new list of products, but this is from getServerSideProps, hence no need
      setMenus(data.products) 
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  // Render data...
  return (
    <Container fluid >
      <Row className='m-2'>
        <Col className="m-1 p-3" style={{ backgroundColor: "#272727", height: 88, textAlign: "center" }}>
          <Button
            variant="link"
            style={{ textDecoration: 'none', fontSize: "2rem", fontWeight: 800, color: "#ffe400" }}
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? 'Loading…' : 'Products'}
          </Button>
        </Col>
      </Row>


      <Row xs={1} md={4} className="g-4">
      {menus && menus.map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={_.image} />
            <Card.Body>
              <Card.Title>{_.name}</Card.Title>
              <Card.Text>
              {_.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">{'$'+_.price}</small>
        </Card.Footer>
          </Card>
        </Col>
      ))} 
      </Row>

    </Container>
  );

}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3100/api/v1/products`)
  //conver to json object 
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
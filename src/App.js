import './App.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [banks, setBanks] = useState([]);
  const getBanks = async () => {
    try {
      const response = await axios.get(
        'https://localhost/api/v2/bank/all?order=ASC&page=1&take=10',
      );

      setBanks(response.data.body.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getBanks();
  });
  return (
    <Container className={'mt-3'}>
      <Row>
        {banks?.map((bank) => (
          <Col className={'mt-3'}>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={bank.bankImg}
                style={{ height: '250px' }}
              ></Card.Img>
              <Card.Body>
                <Card.Title>{bank.bankName}</Card.Title>
                <Card.Text>{bank.user}</Card.Text>
                <Card.Text>{bank.amount}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;

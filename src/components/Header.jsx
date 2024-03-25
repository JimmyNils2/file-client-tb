import React from 'react';
import { Container, Navbar, Form, Col, Row, Button } from 'react-bootstrap';

export const Header = ({appName}) => {
  return (
    <Navbar data-bs-theme='dark' style={{ backgroundColor: `#ff6666` }}>
      <Container>
        <Navbar.Brand href='#'>{appName}</Navbar.Brand>
        <Form inline>
        <Row>
          <Col xs='auto'>
            <Form.Control
              type='text'
              placeholder='Search a file'
              className=' mr-sm-2'
              variant='light'
            />
          </Col>
          <Col xs='auto'>
            <Button type='submit' variant='dark'>Search</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  )
}

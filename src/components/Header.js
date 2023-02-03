import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar bg="dark" variant="dark">
    <Container >
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src="https://thumbs.gfycat.com/MarriedBiodegradableGoshawk-max-1mb.gif"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '}
        &nbsp;
        YUM YUM
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header
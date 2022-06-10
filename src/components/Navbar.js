import {Navbar, Container, Nav} from 'react-bootstrap';

const NavbarNavigation = () => {
    return(
  <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Nav.Link>  Test2 </Nav.Link>
          <Nav.Link>  Test </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
    )
}

export default NavbarNavigation
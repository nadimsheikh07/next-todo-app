import { Container, Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand
          eventKey="disabled"
          onClick={() => {
            handleClick("/");
          }}
        >
          Task
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              eventKey="disabled"
              onClick={() => {
                handleClick("/");
              }}
            >
              Home
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link
              eventKey="disabled"
              onClick={() => {
                handleClick("/categories");
              }}
            >
              Category
            </Nav.Link>
            <Nav.Link
              eventKey="disabled"
              onClick={() => {
                handleClick("/tasks");
              }}
            >
              Tasks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormGroup from "react-bootstrap/esm/FormGroup";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container>
        <Navbar id="nav" bg="primary" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">about</Nav.Link>
                <NavDropdown title="Courses" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    React Course
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  help
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <Container>
        <Form>
          <Row>
            <Col class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </Col>
            <Col class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </Col>
          </Row>
          <FormGroup>
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>
          <Row>
            <Col class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </Col>
            <Col class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </Col>
            <Col class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </Col>
          </Row>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <Button type="submit" class="btn btn-primary">
            Sign in
          </Button>
        </Form>
      </Container>
      <Container id="imgs">
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/10041677/pexels-photo-10041677.jpeg"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/13651098/pexels-photo-13651098.png?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/15350516/pexels-photo-15350516.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/3291250/pexels-photo-3291250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/12742297/pexels-photo-12742297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/10223219/pexels-photo-10223219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/14935622/pexels-photo-14935622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/1899631/pexels-photo-1899631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div>
          <Image
            class="rounded"
            src="https://images.pexels.com/photos/2067509/pexels-photo-2067509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </Container>
    </>
  );
}

export default App;

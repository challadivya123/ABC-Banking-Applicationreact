import './App.css';
import React, { Component, Fragment } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';

class Navbar extends Component {
   
    render() {
      return (
        <Fragment>
          
            <div className="App">
              <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">ABC Banking</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link>
                    <Link to="/admin">Admin</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/user">User</Link>
                  </Nav.Link>
                </Nav>
                
                {/* <Navbar.Collapse className="justify-content-end">
  
                  <NavDropdown title="English" variant="dark" id="dropdown-custom-components" style={{ color: 'white', fontSize: '13px' }}>
                    <NavDropdown.Item >Telugu</NavDropdown.Item>
                    <NavDropdown.Item >Hindi</NavDropdown.Item>
                    <NavDropdown.Item >Tamil</NavDropdown.Item>
                    <NavDropdown.Item >English(UK)</NavDropdown.Item>
                  </NavDropdown>
                </Navbar.Collapse> */}
                {/* <Button onClick={this.admin}>Submit</Button> */}
                {/* <Button variant="link" onClick={this.goToForgot}>Forgot Password</Button> */}
                <Nav.Link>
                    <Link to="/user">Logout</Link>
                </Nav.Link>
                <br></br>
                {/* <Nav.Link>
                    <Link to="/SignUp">SignUp</Link>
                </Nav.Link> */}
                
                    
              
  
                
              </Navbar>
              </div>
              </Fragment>
      )
    }
}
export default Navbar;
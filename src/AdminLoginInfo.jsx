import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, Button, Row, Col, Toast, Carousel } from 'react-bootstrap';

//import User from './User';
//import Admin from './Admin';
import { Link } from 'react-router-dom';

function LoginInfo(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="bg" >
            <Fragment>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home">Welcome!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>
                            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                            <br />
                            {/* <Button variant="primary">LOGIN</Button> */}
                            <Row>
                                <Col xs={6}>
                                    <Button onClick={() => setShow(true)} >LOGIN</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ marginRight: '10%', marginBottom: '10%', marginLeft: '10%' }}>
                    <Carousel>
                    
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                               // src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/aa82a58f-2854-4017-a7c7-7eb9c87819ce/Personal/Home/content/Budget-Dictionary-Website-Banner-716X298.png"  height="300"
                               src="https://www.hdfc.com/sites/default/files/sup-circular-no-2-5.jpg" height="300"
                                alt="Fourth slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/1b936b68-e1ce-4142-ae20-609a59f1adb9/Personal/Home/content/Hero%20Banners/Feb-2021/RBI-FL-Week-Carousel-banners-A-716-x-298-Eng.jpg" height="300"
                                alt="Seecond slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/4f593d6f-4655-4e2b-a44d-2fb2c22bebb3/Footer/About%20Us/Career/Careers-Banner_795-X-385.jpg" height="300"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                 src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/aa82a58f-2854-4017-a7c7-7eb9c87819ce/Personal/Home/content/Budget-Dictionary-Website-Banner-716X298.png"  height="300"
                               // src="https://www.hdfc.com/sites/default/files/sup-circular-no-2-5.jpg" height="300"
                                alt="First slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/b88164fe-52f1-4c8a-bebb-640a75e28ba3/Personal/Home/content/Hero%20Banners/Jan-2021/Tax-Saving-FD-Home-Page-Carousel-716-298.jpg" height="300"
                                alt="Fifth slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    {/* </div> */}

                    {/* <div style={{ marginRight: '100px'}}> */}
                    {/* <div style={{ marginLeft: '39%', marginTop: '20px'}}> */}

                    <Row style={{ marginLeft: '39%' }}>
                        <Col xs={6}>
                            <Toast onClose={() => setShow(false)} show={show} delay={100000} autohide>
                                {/* <Toast.Header> 
                                 <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded mr-2"
                                    alt=""
                                /> 
                                {/* <strong className="mr-auto"><b>Personal Home Page</b></strong> */}
                               
                                {/* </Toast.Header> */}
                                <Toast.Body>

                                    <Link class="btn btn-primary mr-2" to='/admin'>Admin Login</Link><br /><br />
                                    <Link class="btn btn-primary mr-2" to='/user'>User Login</Link>

                                </Toast.Body>
                            </Toast>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        </div>
    )
}
// render(<LoginInfo />);
export default LoginInfo;
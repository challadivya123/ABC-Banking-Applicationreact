import React, { Fragment, useState, useEffect } from 'react';
import { Form, Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const UserView = (props) => {
    const [user, setUser] = useState({
                    name: "",
                    username: "",
                    email: "",
                    phone: "",
                    pan: "",
                   
                });
                const { id } = useParams();
                useEffect(() => {
                    loadUser();
                }, []);
        
                const loadUser = async () => {
                    const res = await axios.get(`http://localhost:3000/users/${id}`);
                    setUser(res.data);
                }
        
                return (
                    <Fragment>
        
                        <Card style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title className='demo'>User Id</Card.Title><br />
                                <Card.Text>
                                    <ListGroup>
                                        {/* <div style={{ display: 'flex', justifyContent: "space-between" }}> */}
                                        <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                                        <ListGroup.Item>User name: {user.username}</ListGroup.Item>
                                        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                                        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                                        <ListGroup.Item>Pan No: {user.pan}</ListGroup.Item>
                                       
                                        {/* </div> */}
                                        <br />
                                        <Link className="btn btn-primary" to="/home">Back to Home</Link>
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
        
        
        
        
            </Fragment>
    

 )

}
export default UserView;
import React, { Fragment, useState, useEffect } from 'react';
import { Navbar, Button, Card, Form, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

import Email from './Email';
import Password from './Password';
//import { userDetails } from './actions';
import './App.css';
//import { connect } from 'react-redux';


function User(props) {

    useEffect(() => {
        loadUsers();
    }, []);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [changeMobile, setChangeMobile] = useState(false);
    const [changeEmail, setChangeEmail] = useState(false);
    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    // const showEmail = () => {
    //     setChangeMobile(!true);
    // }

    // const showMobile = () => {
    //     setChangeMobile(true);
    // }

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }


    const usernameinputvalchange = (e) => {

        setUsername(e.target.value);

    }
    const passwordinputvalchange = (e) => {
        setPassword(e.target.value);

    }
    const [users, setUser] = useState([]);
    const loadUsers = async () => {
        await axios.get('http://localhost:3000/users')
            .then(response => {
                setUser(response.data);
            });
    }
    // const goToForgot = () => {
    //     props.history.push('/ResetLogin1');
    // }

    const onSubmit = () => {

        const usernameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isUsernameValid = usernameRegex.test(username);
        const isPasswordValid = passwordRegex.test(password);

        if (isUsernameValid) {
            for (let i = 0; i < users.length; i++) {

                if (username == users[i].email && password == users[i].password && users[i].role == 'Admin') {
                    return props.history.push('/home');
                } else if (username == users[i].email && password == users[i].password && users[i].role == 'User') {
                    sessionStorage.setItem("user", JSON.stringify(users[i]));
                    return props.history.push('/userpage');

                } else {
                    if (i == users.length - 1) {
                        alert("User name and password not matched");
                    }
                }
            }
        }
        else {
            alert("Invalid Credentials");
        }
    }
    return (
        <Fragment>
            <div className="user">
                <Card style={{ width: '24rem' }}>
                    <Card.Body style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C7nF7qzDqlU_kAykRg3KkiNYNgXnPVOQAQ&usqp=CAU")`, backgroundSize: 'cover' }}>
                        <Card.Title className=''>User Login</Card.Title><br />
                        {/* <Card.Subtitle className="mb-2 text-muted"><small>Please check that you are visiting the correct URL</small></Card.Subtitle> */}
                        <Card.Text>
                            <br />
                            {/* <small className="lock1"> */}
                                {/* <img

                                    src="https://img.flaticon.com/icons/png/512/295/295128.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" width="200"> */}
                                {/* />{' '}  */}
                             {/* <b className="lock2">http://</b>Accounts.com/LOGIN</small><br></br><br></br>     */}
                          <img src="data:image/jpeg;base64,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"width="200"/>
                                <Form>
                                    {/* <div style={{ marginRight: '200px' }}>
                                <Button variant="light" size="sm" onClick={showEmail}>Email</Button>{' '}

                                <Button variant="light" size="sm" onClick={showMobile}>Mobile</Button><hr></hr>
                            </div> */}
                                    {
                                        // changeMobile ?
                                        // <Mobile />
                                        //  :
                                        <Email emailVal={username}
                                            emailValueChange={usernameinputvalchange} />
                                    }

                                    <Password
                                        passwordVal={password}
                                        passwordChange={passwordinputvalchange} />

                                    <Button variant="warning" size="lg" onClick={onSubmit} block>Log In</Button>
                                    {
                                        showAlert === true && (
                                            <Alert variant="success">Success</Alert>
                                        )}{(showAlert === false &&
                                            <Alert variant="warning">Failure</Alert>
                                        )}
                                    <br />

                                    {/* <Button variant="link" onClick={goToForgot}>Forgot Password</Button> */}

                                </Form>
                            
                             
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Fragment>

    )
}
export default User;
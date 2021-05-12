
import React, { Component } from "react";
import { Form, Button, } from 'react-bootstrap';
//import "./../App.css";
//import Nav from "./navbarBeforeLogin";
import axios from 'axios';
 
class SignUp extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            name: " ",
            username: " ",
            email: " ",
            phone: " ",
            role: "User",
            password: " ",
            cType: "current",
            sType: "savings",
           
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state.email)
        axios.post('http://localhost:3000/users', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { name,username,email, password, phone, AdharNo } = this.state
        //this.props.history.push("/login");
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
 
                    <h1>Registartion Form For the User!!!</h1>
                    <br></br>
 
                    <div>
                        <input type="text" name="name" placeholder="Enter Your Name!!" onChange={this.changeHandler} />
                    </div>
                    <br></br>
 
                    <div>
                        <input type="text" name="username" placeholder="Enter Your UserName!!" onChange={this.changeHandler} />
                    </div>
                    <br></br>
 
                    <div>
                        <input type="text" name="email" placeholder="Enter your Email Id**" onChange={this.changeHandler} />
                    </div>
                    <br></br>
                    <div>
                        <input type="text" name="password" placeholder="Enter your Password**" onChange={this.changeHandler} />
                    </div>
                    <br></br>
                    <div>
                        <input type="text" name="phone" placeholder="Enter your Mobile Number**" onChange={this.changeHandler} />
                    </div>
                    <br></br>
                    
                    
                    <Button variant="primary" onClick={() => { this.props.history.push('/login') }}>Register</Button> 
                    {/* <Button type="submit">Submit</Button> */}
 
                </Form>
            </div>
 
        )
    }
 
}
 
export default SignUp;
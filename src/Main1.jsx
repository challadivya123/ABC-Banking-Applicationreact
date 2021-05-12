import './App.css';
import React, { Component, Fragment } from 'react';
import { Button, Card } from 'react-bootstrap';

class Main1 extends Component {
    render() {
        return (
            <div className="main"style={{backgroundImage: `url("https://img.freepik.com/free-vector/white-abstract-background_23-2148817571.jpg?size=626&ext=jpg")`}}>
            <Fragment>
                <Card className="card1">
                    <Card.Img variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/92/30/crystal-background-vector-9929230.jpg" height='200px' />
                    <Card.ImgOverlay>
                        <Card.Title style={{ color: 'white', fontFamily: 'serif', fontSize: '50px', textAlign: 'center', marginTop: '50px' }}>Welcome to our bank!</Card.Title>
                    </Card.ImgOverlay>
                    {/* <Card.Img variant="top" src="https://www.mybusiness.com.au/images/resize/bank-myb_f25f.jpg" height='200px' />
                    <Card.ImgOverlay>
                       <Card.Title style={{color: 'white', fontFamily: 'serif' , fontSize: '40px', textAlign: 'center', marginTop: '50px'}}>Welcome to our bank!</Card.Title> 
                        
                    </Card.ImgOverlay>  */}
                </Card>
                <Card className="card2">
                    <Card.Img variant="top" src="https://m.economictimes.com/thumb/msid-71160696,width-1200,height-900,resizemode-4,imgsize-169788/bank-getty.jpg" height='200px' />
                </Card>
                <br />
            </Fragment>
            </div>
        )
    }
}
export default Main1;
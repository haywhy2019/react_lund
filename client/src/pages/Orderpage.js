import React, { Component }  from 'react';
import axios from 'axios';
import {Container, Row, Col,} from 'react-bootstrap';

import style from './Style.module.css';



const initialState = {
  Name: '',
  email: '',
  Address: '',
  Phone: '',
  Trousers: 0,
  Shirts: 0,
  Jacket: 0,
  Others: 0,
  ordererror: '',
  viewOrder: '',
  response: ''


};



export default class Order extends React.Component {
 state = initialState;
 

handleChange = event => {
  const isCheckbox = event.target.type === 'checkbox';
  this.setState({
    [event.target.name]: isCheckbox
    ? event.target.checked
    : event.target.value
  });
};

validate = () => {
  let ordererror= '';

 
   if(this.state.Trousers===0 && this.state.Shirts===0 &&
  this.state.Jacket===0 && this.state.Others ===0 ){
    ordererror ='please select at least one option';
  }
  if(ordererror) {
    this.setState({ordererror});
    return false;
  }

  return true


}
submitForm = event => {
  event.preventDefault();
  const isValid = this.validate();
  if(isValid) {
    console.log(this.state)
    const order = { 
      Name: this.state.Name,
      email: this.state.email,
      Address: this.state.Address,
      Phone: this.state.Phone,
      Trousers: this.state.Trousers,
      Shirts: this.state.Shirts,
      Jacket: this.state.Jacket,
      Others: this.state.Others
     
    }
    console.log(order)
    
  
    axios.post('http://localhost:5000/order', order )
    .then(res => console.log(res.data))
    .catch(err => console.error(err));

  
  }

  window.location = '/Response'

}

// handleSubmit

handleSubmit = event => {
  event.preventDefault();
  const isValid = this.validate();
  let viewOrder ='';
  if(isValid){
    console.log(this.state)
    const prices = {
      shirtPrice: 200,
      trousersPrice: 300,
      jacketPrice: 400,
      othersPrice: 100
    };

    // price multiplied by quantity
    const totalShirt = this.state.Shirts * prices.shirtPrice;
    const totalTrousers = this.state.Trousers * prices.trousersPrice;
    const totalJacket = this.state.Jacket * prices.jacketPrice;
    const totalOthers = this.state.Others * prices.othersPrice;
    

    const totalPrice = totalJacket + totalOthers + totalShirt + totalTrousers;
    console.log(viewOrder);
    console.log(totalPrice);
    viewOrder =    
    <div className="card p-2 bg-light">
      <div className={style.ordertext}>
    <div><h5>Name: {this.state.Name}</h5><h5> Phone Number: {this.state.Phone}</h5></div>
    <div><h5>Address: {this.state.Address}</h5></div>
    <div><h5>Shirt Quantity: {this.state.Shirts} x N{prices.shirtPrice} = N{totalShirt}</h5></div>
    <div><h5>Trousers Quantity: {this.state.Trousers} x N{prices.trousersPrice} = N{totalTrousers} </h5></div>
     <div> <h5>Jacket Quantity: {this.state.Jacket} x N{prices.jacketPrice} = N{totalJacket} </h5></div>
    <div><h5>Others Quantity: {this.state.Others}  x N{prices.othersPrice} = N{totalOthers}</h5> </div>
     <div className={style.total}><h4>TOTAL CHARGE: N{totalPrice}</h4> </div>
     </div>
     <button className={style.button1} onClick={this.submitForm} type='Submit'>Checkout</button>
     </div>

    this.setState({viewOrder});
    //clear form
   // this.setState(initialState);

   axios.post('http:localhost:5000/order', viewOrder)
   .then(res => console.log(res.data))
  }
  return true ;
 
  
};
 

render(){
    return (
        <div>
            <Container>
                <Row className="mb-5 mt-5 justify-content-center">
                    <Col xs={12} sm={5}>
                    <h1 className={style.ordertext}>PLACE YOUR ORDER</h1>
                          <form onSubmit={this.handleSubmit}>
                        
                            <div className={style.input}> 
                            <input
                              type="text"
                              name="Name"
                              value={this.state.Name}
                              onChange={this.handleChange}
                              placeholder='Name'
                              required
                            className={style.formStyle}/>
                            </div>
                            <div className={style.input}> 
                            <input
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleChange}
                              placeholder='email'
                              required
                            className={style.formStyle}/>
                            </div>
                          
                            <div className={style.input}> 
                            <input
                              type="telephone"
                              name="Phone"
                              value={this.state.Phone}
                              onChange={this.handleChange}
                              placeholder='Phone number'
                              required
                              className={style.formStyle}/>
                            </div>
                            <div className={style.input}>                             
                            <input
                              type="text"
                              name="Address"
                              value={this.state.Address}
                              onChange={this.handleChange}
                              placeholder='Address'
                              required
                              className={style.formStyle}/>
                            </div>
                            <div className={style.input}>
                           <p>Trousers</p>
                            <input
                              type="number"
                              name="Trousers"  
                              placeholder='Trousers'                         
                              min=""
                              max="100"
                              value={this.state.Trousers}
                              onChange={this.handleChange}
                              className={style.formStyle}/> 
                              {this.state.ordererror ? (
                                <div style={{color: "red"}}>
                                {this.state.ordererror}</div>
                              ) : null}
                         
                            <p>Shirts</p>
                          <input
                            type="number"
                            name="Shirts"
                            min="0"
                            max="100"
                            value={this.state.Shirts}
                            onChange={this.handleChange}
                            placeholder='Shirts'
                            className={style.formStyle}/> 
                              {this.state.ordererror ? (
                                <div style={{color: "red"}}>
                                {this.state.ordererror}</div>
                              ) : null}
                          </div>
                            <div className={style.input}>
                            <p>Jackets</p>
                            <input
                              type="number"
                              name="Jacket"
                              min="0"
                              max="100"
                              value={this.state.Jacket}
                              onChange={this.handleChange}
                              placeholder='Jacket'
                              className={style.formStyle}/>
                             {this.state.ordererror ? (
                                <div style={{color: "red"}}>
                                {this.state.ordererror}</div>
                              ) : null}
                            </div>
                            <div className={style.input}> 
                            <p>Others</p>
                            <input
                              type="number"
                              name="Others"
                              min="0"
                              max="100"
                              value={this.state.Others}
                              onChange={this.handleChange}
                              placeholder='Others'
                              className={style.formStyle}/>
                             {this.state.ordererror ? (
                                <div style={{color: "red"}}>
                                {this.state.ordererror}</div>
                              ) : null}
                            </div>
                            <div>
                            <button className={style.button} type=''>View Order</button>
         

                            </div>
                            
                    </form>
                    </Col>
                    
                    <Col xs={12} sm={5}>

                        
        <div className={style.ordertext}>
          <h1>How to use LUNDAPP</h1>
       
          <ol>
          <li className="h4">Fill the name, address and phone number labels.</li>
          <li className="h4">Select what you want to wash.</li>
          <li className="h4">Others includes cloths like underwears, handkerchief etc.</li>
          <li className="h4">Use the labels named shirts, trousers, others and jacket to choose quantity and type.</li>
          <li className="h4">Click vieworder to view your order and cost of service.</li>
          
          <li className="h4">
            click checkout when you are through picking the cloths you want to
            wash.
          </li>
          <li className="h4">Made an error? click LUNDAPP to start afresh.</li>
        </ol>
        </div>
                    </Col>
                </Row>
                <Container>
                  <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={8}>
                    <div className=''>{this.state.viewOrder}</div>
                    </Col>
                    <Col sm={2}>
                    </Col>
                  </Row>
                </Container>
               
            </Container>
      
  
        </div>
    )
}
}

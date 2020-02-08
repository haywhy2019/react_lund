import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Style from './ContactUs.module.css'
import style from './Style.module.css';
import axios from 'axios'


export default class ContactUs extends React.Component {
 state = {
  name: '',
  email: '',
  tel: '',
  address: ''
 };

 handleChange = event => {
  const isCheckbox = event.target.type === 'checkbox';
  this.setState({
    [event.target.name]: isCheckbox
    ? event.target.checked
    : event.target.value
  });
};


handleSubmit = event => {
  event.preventDefault();
 console.log(this.state)

 const contact = { 
  name: this.state.name,
  email: this.state.email,
  tel: this.state.tel,
  address: this.state.address
 
}
console.log(contact)
    
  
    axios.post('http://localhost:5000/contactus', contact )
    .then(res => console.log(res.data))
    .catch(err => console.error(err));

}



  
  render(){
    return(
      <Container>
      <div className={Style.textheading}>
      <h1 className='text-center mb-5 mt-5 mobile' >CONTACT US</h1>
      </div>
      <div className={Style.margin}>
    <Row className="justify-content-center ml-5 mobile">
    <Col xs={12} sm={4} className="home mobile"> 
 <h1 className="text-align-left mt-5 mobile"> PHONE NUMBER</h1>
 <p className="text-align-left mt-2">07064959392</p>
 <p className="text-align-left mt-2">08064959392</p>
    </Col>
    <Col xs={12} sm={6} className="home">
    <form onSubmit={this.handleSubmit}>
                        
                        <div className={style.input}> 
                        <input
                          type="text"
                          name="name"
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
                          type="number"
                          name="tel"
                          value={this.state.Phone}
                          onChange={this.handleChange}
                          placeholder='Phone number'
                          required
                          className={style.formStyle}/>
                        </div>
                        <div className={style.input}>                             
                        <input
                          type="text"
                          name="address"
                          value={this.state.Address}
                          onChange={this.handleChange}
                          placeholder='Address'
                          
                          className={style.formStyle}/>
                        </div>
                        <button className={style.button1} 
                        type='Submit'>Submit</button>
                        </form>

    </Col>
 </Row>
 </div>
 </Container>
    )
  }
}

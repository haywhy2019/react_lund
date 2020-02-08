import React from 'react'
import ContactUs from './ContactUs'
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import Style from './About.module.css'




function About() {
    return (
      
        <div className='mt-5 noGutters mobile'>
        <Container className={Style.about}>
            <h1 className='text-center mb-5'>WHO ARE WE?</h1>
            <Row className='justify-content-center'>
               
                <Col xs={12} sm={9} >
                <h3 className='test-center'>We are team of delicated people who seek to revolutionise  Laundry business in Lagos by providing online web ordering service. With a touch of your finger we will provide door to door pickup and delivery service at your convenience. 
                Saving your precious time to do what really matter to you.</h3>
                </Col>
                
               </Row>
                <div>
            <h1 className='text-center mt-3 mb-5'>OUR AMAZING TEAM</h1>
            <Row className='justify-content-center'>
               
               <Col xs={12} sm={3} >
               <Image src="assets/team1.jpg" className={Style.aboutimg}/>
               <h3 className='mt-3'>Sarah</h3>
               <p>Hi am Sarah CEO of LUNDAPP,Thank you for trusting us</p>
               </Col>
               
               <Col xs={12} sm={3} >
               <Image src="assets/team2.jpg" className={Style.aboutimg}/>
               <h3 className='mt-3'>Stones</h3>
               <p>Hi am Stones, Manager at LUNDAPP,Thank you for trusting us</p>
                   
               </Col>

               <Col xs={12} sm={3} >
              
               <Image src="assets/team3.jpg" className={Style.aboutimg}/>
               <h3 className='mt-3'>Stan</h3>
               <p>Hi am Stan Head of Operations of LUNDAPP,Thank you for trusting us</p>
               </Col>
               
              </Row>
                <ContactUs />

               </div>
        </Container>
    
        </div>
       
       
    )
}

export default About
import React, {Component} from 'react';
import { Container, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Style from './Style.module.css'


class Response extends Component {

  

    render() {
        return (
              
           <Container>
         
                <Card style={{width:'900px'}} className='mt-5'>
               
               <Card.Body className={Style.ordertext}>
                <h1>Thank You</h1>
                <h2>A Lund Representative would be in touch with you shortly</h2>
                <Link to= '/'>
                <button className={Style.button} type='submit'>Close</button>
                </Link>
                </Card.Body>
                </Card>
            </Container>
            
      

        )
    }
}

export default Response


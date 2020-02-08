import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { get } from "mongoose";
import style from './ExternalApi.module.css'
import { Card } from 'react-bootstrap';

const ExternalApi = () => {
 
  const [order, setorder] = useState([]);
  const { getTokenSilently } = useAuth0();

  
  const [contacts, setContacts] = useState([]);
 
 

  const orders = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("/order", {
        headers: {
          method: get,
          Authorization: `Bearer ${token}`
        }
      });

      const responseData = await response.json();
      console.log(responseData)

      setorder(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  

  const contact = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("/contactus", {
        headers: {
          method: get,
          Authorization: `Bearer ${token}`
        }
      });

      const responseData = await response.json();
            console.log(responseData)

             const responseInfo = responseData.map(order);

      function order(value){
        return value
      }
      console.log(responseInfo)

    
      setContacts(responseData);
      // setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
    <>
    <div className={style.about}>
    <h1 className={style.about}>Orders</h1>
      <button className={style.button} onClick={orders}>Get Orders</button>
      <div > 
     
          {
        order.map((orders, i) => {
          return(
              <Card style={{ margin: '5px' }}>
                <Card.Body>              
              <div key ={i} key={orders._id}>
              <p>Name: {orders.Name}</p>
              <p>Email: {orders.email}</p>
              <p>Address: {orders.Address}</p>
              <p>Phone Number: {orders.Phone}</p>
              <p>Trouser Quantity: {orders.Trousers}</p>
              <p>Shirts Quantity: {orders.Shirts}</p>
              <p>Jackets Quantity: orders.Jacket}</p>
              <p>Others: {orders.Others}</p>
              <p>Date Booked: {orders.date}</p>
            </div>
            </Card.Body>
            </Card>           
          )
        })
      }
    
      </div>
    </div>
     <div className={style.about}>
     <h1>Contact Us</h1>
      <button className={style.button} onClick={contact}>Get Contacts</button>    
      <div>
      {
      contacts.map((contact, i) =>{
        return(
          <Card style={{ margin: '5px' }}>
          <Card.Body>              
        <div key ={i}>
        <p>Name: {contact.name}</p>
        <p>Email:  {contact.email}</p>
        <p>Address: {contact.tel}</p>
        <p>Address: {contact.Address}</p>
        <p>Date: {contact.date}</p>
      </div>
      </Card.Body>
      </Card>     
        )
      })
      }
      </div>
   </div>
     
    </>
  );
};

export default ExternalApi;
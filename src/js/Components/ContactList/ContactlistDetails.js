/*
**************************************ContactListDetails Overview***************************************
This is another stateless Dumb Component responsible to show the details of the selected person from the
list.It recieves the data fro the Contactlist Component.
********************************************************************************************************
*/

import React, { Component } from 'react';
import {Media } from 'react-bootstrap'

export const ContactlistDetails = (props) => {
  console.log('contacts  in ContactlistDetails',props)
 const email = props.contacts.contact.email

  
 return (
  <li>
    <Media>
      <Media.Left>
          <img width={96} height={96} src={`${props.contacts.general.avatar}`} />
      </Media.Left>

      <Media.Body>
        <Media.Heading>

        <p>   {`${props.contacts.general.firstName} ${props.contacts.general.lastName}`}</p>
         
        </Media.Heading>
        <p> Job Title : {`${props.contacts.job.title}`} </p>
        <p> Email : {`${props.contacts.contact.email}`} </p>
        <p> Phone : {`${props.contacts.contact.phone}`} </p>
        <p> Address : {`${props.contacts.address.zipCode},
        ${props.contacts.address.street},
        ${props.contacts.address.city},
        ${props.contacts.address.country}`} </p>
          
      </Media.Body>

    </Media>
  </li>
 );
}
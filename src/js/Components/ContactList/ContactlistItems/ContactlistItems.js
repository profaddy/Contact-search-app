/*
***************************************ContaclistItems Overview**************************************
This Module Recieves the array of list filtered out from the search term and will be only responsible
for displaying of each employee in an array. This is stateless Dumb Component that is only responsible
for displaying recieved data
*****************************************************************************************************
*/



import React, { Component } from 'react';
import {Media } from 'react-bootstrap'

export const ContactlistItems = (props) => {
  console.log('contacts  in props.contacts',props)
  const email = props.contacts.contact.email

  
   return (

    <li onClick={props.handleOnClick(email)} >

      <Media>
        <Media.Left>
            <img width={48} height={48} src={`${props.contacts.general.avatar}`} />
        </Media.Left>

        <Media.Body>
          <Media.Heading>
            {`${props.contacts.general.firstName} ${props.contacts.general.lastName}`} 
          </Media.Heading>

          <p>Job Title : {`${props.contacts.job.title}`} </p>
        </Media.Body>
      </Media>

    </li>

   );
}
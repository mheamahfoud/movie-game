import './Contact.scss';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Card } from "react-bootstrap";



export default function Contact() {

  return (
    <div className="card-contact">
 
      <div class="main-container">
      <div className='head-container' >
           <h2>GET IN TOUCH</h2>
           <p>
            Trsail transam furl Sea Legs scallywag jack Ketch chandler mizzenmast reef
            sails skysail.Shiver me timbers loot bucko belaying pin Sea boom 
            gunwalls booty jury mast fare.
           </p>
        </div>
        <div className=' content-container'>
        <div className='row'>
          <div className='col-6'>
            <label for="fname"> Name</label>
            <input type="text" id="fname" name="firstname"  />

          </div>

          <div className='col-6'>
            <label for="email">Email  Address</label>
            <input type="text" id="email" name="email" />
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <label for="message">Message</label>
              <textarea id="message" name="message" style={{ height: "200px" }}></textarea>

            </div>

          </div>
          <div className='row'>
            <div className='col-12'>
              <button  type="button" className=" button-submit" > Send</button>
            </div>
          </div>
        </div>







      </div>

    </div>
  );

}

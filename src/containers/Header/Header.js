import React from 'react';
import { NavLink } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import './Header.scss';
import { useState } from 'react';
import { useEffect} from 'react';
import {
  useLocation
} from "react-router-dom";

function GetCurrentPage() {
  let location = useLocation();
  React.useEffect(() => {
    location= location.pathname;
        
  }, []);

  return location;
}
const Header = () => {

  const [displayVideoShadow, setdisplayVideoShadow] = useState('block');
  const [displayContactShadow, setdisplayContactShadow] = useState('none');
  const [path, setPath] = useState(GetCurrentPage().pathname);
  function showVideoGame() {
    setdisplayVideoShadow('block')
    setdisplayContactShadow('none')
  }

  function showContact() {
    setdisplayVideoShadow('none')
    setdisplayContactShadow('block')
  }
  
  useEffect(() => {
     if(path=='/contact'){
      setdisplayVideoShadow('none')
      setdisplayContactShadow('block')
     }
        
 
       

}, []);

  return (
    <nav className="navbar-wrapper"  >
      <Breakpoint large up>
        <ul className="navbar-links">

          <li className="navbar-link">
            <NavLink onClick={showVideoGame} to="/"><div class="main">
              <span>VIDEO Games</span>
              <div class="shadow" style={{ display: displayVideoShadow }}>VIDEO</div>
            </div> </NavLink>
          </li>
          <li className="navbar-link" style={{}}>
            <NavLink onClick={showContact} to="/contact"><div class="main">
              <span>CONTACT</span>
              <div class="shadow" style={{ display: displayContactShadow }}>CONTACT</div>
            </div></NavLink>
          </li>

        </ul>
      </Breakpoint>
      <Breakpoint medium only>
        <ul className="navbar-links">

          <li className="navbar-link">
            <NavLink onClick={showVideoGame} to="/"><div class="main">
              <span>VIDEO Games</span>
              <div class="shadow" style={{ display: displayVideoShadow }}>VIDEO</div>
            </div> </NavLink>
          </li>
          <li className="navbar-link" style={{}}>
            <NavLink onClick={showContact} to="/contact"><div class="main">
              <span>CONTACT</span>
              <div class="shadow" style={{ display: displayContactShadow }}>CONTACT</div>
            </div></NavLink>
          </li>

        </ul>
      </Breakpoint>
      <Breakpoint small down>
        <ul className="navbar-links">
          <li className="navbar-link">
            <NavLink onClick={showVideoGame} to="/"><div class="main">
              <span>VIDEO Games</span>
              <div class="shadow" style={{ display: displayVideoShadow }}>VIDEO</div>
            </div> </NavLink>
          </li>
          <li className="navbar-link" style={{}}>
            <NavLink onClick={showContact} to="/contact"><div class="main">
              <span>CONTACT</span>
              <div class="shadow" style={{ display: displayContactShadow }}>CONTACT</div>
            </div></NavLink>
          </li>
        </ul>
      </Breakpoint>
    </nav>
  );
};

export default Header;

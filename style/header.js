import React from "react";
import "./style.css"
import { RiArrowDropDownLine } from 'react-icons/ri';
function Header(){
    return(
        <div>
        <div id="header-portion">
          <div id="part-1">
            <p id="edyoda">EDYODA</p>
            <span id="storie">Stories</span>
          </div>
          <div>Explore Cartagories<i id="icon"><RiArrowDropDownLine/></i></div>
          <div id="content">EdYoda is a learning and knowledge<br></br>
            sharing platform for techies</div>
          <div id="btn">Go To Main Website</div>
        </div>
        </div>
    )
}
export default Header;

import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>swathiit01@gmail.com</span>
       <div className="f-icons">         
         <a  href ="https://github.com/swathiravi-vh" target="_blank" ><img  color="white " src={Github}  alt="" /></a> 
         <a   href ="https://www.linkedin.com/in/swathi-ravi-28hemi/" target="_blank" ><img src={LinkedIn}  color= "white" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

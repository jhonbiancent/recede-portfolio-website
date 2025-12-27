import React from 'react'
import Image from "next/image";
import devLogo from "./assets/RCDE- Productions Logo.png";
import navBarCSS from "./navbar.module.css";
import "../lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"; 
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"; 
import { faHandsHoldingCircle } from "@fortawesome/free-solid-svg-icons"; 
import { faPhone } from "@fortawesome/free-solid-svg-icons"; 
const navbar = () => {
  return (
      <div className={navBarCSS.navBarMainContainer}>
           <Image className={navBarCSS.logo} src={devLogo} alt="RCDE Productions"/>
          <div>
            <p><FontAwesomeIcon icon={faHome} /> Home</p>
            <p><FontAwesomeIcon icon={faGraduationCap} /> Education</p>
            <p><FontAwesomeIcon icon={faHandsHoldingCircle} /> Skills</p>
            <p><FontAwesomeIcon icon={faPhone} /> Contact</p>
        </div>
    </div>
  )
}

export default navbar

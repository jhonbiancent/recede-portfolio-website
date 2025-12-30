"use client";
import Image from "next/image";
import devLogo from "./assets/icons/RCDE- Productions Logo.png";
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
            <p  onClick={() => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth"
    });
  }}><FontAwesomeIcon icon={faHome} /> Home</p>
            <p  onClick={() => {
    document.getElementById("education")?.scrollIntoView({
      behavior: "smooth"
    });
  }}><FontAwesomeIcon icon={faGraduationCap} /> Education</p>
            <p  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  }}><FontAwesomeIcon icon={faHandsHoldingCircle} /> Projects</p>
        </div>
    </div>
  )
}

export default navbar

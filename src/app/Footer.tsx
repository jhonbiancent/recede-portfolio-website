"use client"
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "./assets/RCDE- Productions Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className={style.footerBody}>
      <Image className={style.icon} src={logo} alt="RCDE PRODUCTIONS Logo" />
      <div className={style.navigationSection}>
        <h5>NAVIGATION</h5>
        <li onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>About Me</li>
        <li onClick={() => {
    document.getElementById("education")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>Education</li>
        <li onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>Projects</li>
      </div>
      <div className={style.contactsSection}>
        <h5>CONTACTS</h5>
        <li><FontAwesomeIcon icon={faPhone}/> 09469796509</li>
        <li><FontAwesomeIcon icon={faEnvelope}/> jhonbiancent06@gmail.com</li>
        <Link className={style.link}href="https://www.linkedin.com/in/jhon-biancent-recede-4a8ba7314/"><li><FontAwesomeIcon icon={faLinkedin}/> Jhon Biancent Recede</li></Link>
        <Link className={style.link}href="https://www.facebook.com/Jeybie06"><li><FontAwesomeIcon icon={faFacebook}/> Jhon Biancent G. Recede</li></Link>
      </div>
      <div className={style.downloadSection}>
        <h5>RESUME</h5>
        <li>Download my resume</li>
        <Link href="/resume.pdf" download=""><button>Download <FontAwesomeIcon icon={faDownload}/></button></Link>
       </div>
    </div>
  )
}

export default Footer

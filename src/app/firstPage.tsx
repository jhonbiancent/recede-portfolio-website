import React from 'react'
import firstPageCSS from "./firstPageCSS.module.css";
import Image from "next/image";
import devPhoto from "./assets/PROFILE-PICTURE.jpg"
import icnLinkedIn from "./assets/icons/icon-linkedin.png";
import icnFacebook from "./assets/icons/icon-facebook.png";
import icnMessenger from "./assets/icons/icon-messenger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faLaptopCode, faArrowRight, faGamepad, faComputer} from "@fortawesome/free-solid-svg-icons"; 

const firstPage = () => {
  return (
      <div className={firstPageCSS.firstPageMainContainer}>
          <div className={firstPageCSS.developerImageSide}>
              <div className={firstPageCSS.developerRGB }>
                  <div className={firstPageCSS.developerPhotoContainer}>
                    <Image className={firstPageCSS.developerPhoto} src={devPhoto} alt="Jhon Biancent Recede Photo"/>
                  </div>
               </div>
          </div>
      <div className={firstPageCSS.developerDescriptionSide}>
              <h1 className={firstPageCSS.developerNickname}>HI I'M JEYBI!</h1>
              <h1 className={firstPageCSS.developerName}>JHON BIANCENT G. RECEDE</h1>
              <h2 className={firstPageCSS.developerSkills}> <FontAwesomeIcon icon={faComputer} /> Web | <FontAwesomeIcon icon={faGamepad} /> Game | <FontAwesomeIcon icon={faMobileScreen} /> Mobile | <FontAwesomeIcon icon={faLaptopCode} /> Software Developer </h2>
              <div className={firstPageCSS.developerSkillsDescriptionContainer}>
                    <h3 className={firstPageCSS.developerSkillsDescription}>
                        I am an aspiring software developer focusing on creating practical solutions through coding, design, and game development.
                        My work blends technical skills with creativity, allowing me to build functional systems,
                        visual concepts, and interactive experiences.
                    </h3>
        </div>
        <div className={firstPageCSS.moreButtonsSection}>
          <button className={firstPageCSS.getInTouchButton}>Get in Touch <FontAwesomeIcon icon={faArrowRight} /></button>
          <Image className={firstPageCSS.icnButtons} src={icnLinkedIn} alt="LinkedIn Icon" />
          <Image className={firstPageCSS.icnButtons} src={icnFacebook} alt="Facebook Icon" />
          <Image className={firstPageCSS.icnButtons} src={icnMessenger} alt="Gmail Icon" />
        </div>
        </div>
    </div>
  )
}

export default firstPage

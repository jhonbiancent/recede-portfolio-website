"use client";
import style from "./firstPageCSS.module.css";
import Image from "next/image";
import Link from "next/link";
import devPhoto from "./assets/PROFILE-PICTURE.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faLaptopCode, faArrowRight, faGamepad, faComputer} from "@fortawesome/free-solid-svg-icons"; 
import LiquidEther from "../components/LiquidEther";
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const firstPage = () => {
  return (
    <div className={style.firstPageMainContainer} id="home">
      <div style={{ width: '100%', height: 600, position: 'absolute' }}>
        <LiquidEther/>
      </div>
          <div className={style.developerImageSide}>
              <div className={style.developerRGB }>
                  <div className={style.developerPhotoContainer}>
                    <Image className={style.developerPhoto} src={devPhoto} alt="Jhon Biancent Recede Photo"/>
                  </div>
               </div>
          </div>
      <div className={style.developerDescriptionSide}>
          <h1 className={style.developerNickname}>HI I'M JEYBI!</h1>
          <h1 className={style.developerName}>JHON BIANCENT G. RECEDE</h1>
          <h2 className={style.developerSkills}> <FontAwesomeIcon icon={faComputer} /> Web | <FontAwesomeIcon icon={faGamepad} /> Game | <FontAwesomeIcon icon={faMobileScreen} /> UI/UX | <FontAwesomeIcon icon={faLaptopCode} /> Software Developer </h2>
          <div className={style.developerSkillsDescriptionContainer}>
            <h3 className={style.developerSkillsDescription}>
                  I am an aspiring software developer focusing on creating <span>practical</span> solutions through coding, design, and game development.
                  My work blends technical skills with <span>creativity</span>, allowing me to build functional systems,
                  visual concepts, and <span>interactive</span> experiences.
            </h3>
          </div>
          <div className={style.moreButtonsSection}>
            <button className={style.getInTouchButton}>Get in Touch <FontAwesomeIcon icon={faArrowRight} /></button>
            <Link className={style.iconContainer}href="https://www.linkedin.com/in/jhon-biancent-recede-4a8ba7314/">
              <FontAwesomeIcon className={style.icon} icon={faLinkedin} />
            </Link>
            <Link className={style.iconContainer}href="https://www.facebook.com/Jeybie06">
              <FontAwesomeIcon className={style.icon} icon={faFacebook} />
            </Link>
          </div>
      </div>
    </div>
  )
}

export default firstPage

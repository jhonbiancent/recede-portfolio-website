import React from 'react'
import secondPageCSS from "./secondPageCSS.module.css";
import Image from "next/image";
import icnhtml from "./assets/icons/skills-HTML.png";
import icncss from "./assets/icons/skills-CSS.png";
import icnjs from "./assets/icons/skills-JS.png";
import icnnextjs from "./assets/icons/skills-Nextjs.png";
import icnreact from "./assets/icons/skills-React.png";
import icnts from "./assets/icons/skills-Typescript.png";
import icnphp from "./assets/icons/skills-PHP.png";
import icnunity from "./assets/icons/skills-Unity.png";
import icngodot from "./assets/icons/skills-Godot.png";
import icnblender from "./assets/icons/skills-Blender.png";
import icnillustrator from "./assets/icons/skills-Illustrator.png";
import icnphotoshop from "./assets/icons/skills-Photoshop.png";
import icnpremier from "./assets/icons/skills-Premier.png";
import icncanva from "./assets/icons/skills-Canva.png";
import icnfigma from "./assets/icons/skills-Figma.png";
import icnpython from "./assets/icons/skills-Python.png";
import icncplus from "./assets/icons/skills-cplus.png";
import icncsharp from "./assets/icons/skills-csharp.png";
import icnnetbeans from "./assets/icons/skills-netbeans.png";
import icngithub from "./assets/icons/skills-github.png";

import AnimatedContent from "../components/AnimatedContent";
const secondPage = () => {
  return (
    <div className={secondPageCSS.secondPageMainContainer} id="education">
      <div className={secondPageCSS.mainContainer}>
        <h1>About Me</h1>
        <div className={secondPageCSS.detailsContainer}>
          <AnimatedContent className={secondPageCSS.aboutMeContainer} direction="vertical" distance={50} duration={1}>
                <h2>EDUCATION</h2>
                <p>BS in Information Technology</p>
                <p>Software Technology Major</p>
                <p>West Visayas State University</p>
                <p>CSE Professional Passer</p>
          </AnimatedContent>
          <AnimatedContent className={secondPageCSS.skillsContainer}  direction="vertical" distance={50} duration={1}>
                <h2>SKILLS</h2>
                <div className={secondPageCSS.webdevelopmentContainer}>
                  <p>Web Development:</p>
                  <Image className={secondPageCSS.icons} src={icnhtml} alt="html" />
                  <Image className={secondPageCSS.icons} src={icncss} alt="css" />
                  <Image className={secondPageCSS.icons} src={icnjs} alt="js" />
                  <Image className={secondPageCSS.icons} src={icnnextjs} alt="nextjs" />
                  <Image className={secondPageCSS.icons} src={icnreact} alt="react" />
                  <Image className={secondPageCSS.icons} src={icnts} alt="typescript" />
                  <Image className={secondPageCSS.icons} src={icnphp} alt="php"/>
                </div>
                <div className={secondPageCSS.webdevelopmentContainer}>
                  <p>Game Development:</p>
                  <Image className={secondPageCSS.icons} src={icnunity} alt="unity" />
                  <Image className={secondPageCSS.icons} src={icngodot} alt="godot"/>
                  <Image className={secondPageCSS.icons} src={icnblender} alt="blender"/>
                  <Image className={secondPageCSS.icons} src={icnillustrator} alt="illustrator" />
                  <Image className={secondPageCSS.icons} src={icncsharp} alt="csharp"/>
                </div>
                <div className={secondPageCSS.webdevelopmentContainer}>
                  <p>UI/UX Design & Multimedia:</p>
                  <Image className={secondPageCSS.icons} src={icnphotoshop} alt="photoshop" />
                  <Image className={secondPageCSS.icons} src={icnpremier} alt="premier" />
                  <Image className={secondPageCSS.icons} src={icncanva} alt="canva"/>
                  <Image className={secondPageCSS.icons} src={icnfigma} alt="Figma"/>
                </div>
                <div className={secondPageCSS.webdevelopmentContainer}>
                  <p>Other Programming Tools:</p>
                  <Image className={secondPageCSS.icons} src={icnpython} alt="Python" />
                  <Image className={secondPageCSS.icons} src={icncplus} alt="Cplusplus" />
                  <Image className={secondPageCSS.icons} src={icnnetbeans} alt="netbeans" />
                  <Image className={secondPageCSS.icons} src={icngithub} alt="github" />
                </div>
          </AnimatedContent>
        </div>
      </div>
      
    </div> 
  )
}

export default secondPage

import React from 'react'
import secondPageCSS from "./secondPageCSS.module.css";
import Image from "next/image";
import icnhtml from "./assets/skills-HTML.png";
import icncss from "./assets/skills-CSS.png";
import icnjs from "./assets/skills-JS.png";
import icnnextjs from "./assets/skills-Nextjs.png";
import icnreact from "./assets/skills-React.png";
import icnts from "./assets/skills-Typescript.png";
import icnphp from "./assets/skills-PHP.png";
import icnunity from "./assets/skills-Unity.png";
import icngodot from "./assets/skills-Godot.png";
import icnblender from "./assets/skills-Blender.png";
import icnillustrator from "./assets/skills-Illustrator.png";
import icnphotoshop from "./assets/skills-Photoshop.png";
import icnpremier from "./assets/skills-Premier.png";
import icncanva from "./assets/skills-Canva.png";
import icnfigma from "./assets/skills-Figma.png";
import icnpython from "./assets/skills-Python.png";
import icncplus from "./assets/skills-cplus.png";
import icncsharp from "./assets/skills-csharp.png";
import icnnetbeans from "./assets/skills-netbeans.png";
import icngithub from "./assets/skills-github.png";
const secondPage = () => {
  return (
    <div className={secondPageCSS.secondPageMainContainer}>
      <div className={secondPageCSS.mainContainer}>
        <h1>About Me</h1>
        <div className={secondPageCSS.detailsContainer}>
          <div className={secondPageCSS.aboutMeContainer}>
            <h2>EDUCATION</h2>
            <p>BS in Information Technology</p>
            <p>Software Technology Major</p>
            <p>West Visayas State University</p>
          </div>
          <div className={secondPageCSS.skillsContainer}>
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
          </div>
        </div>
      </div>
    </div> 
  )
}

export default secondPage

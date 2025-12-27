import React from 'react'
import seventhPageCSS from "./seventhPageCSS.module.css";
import Image from "next/image";
import image1 from "./assets/others/past-the-treeline.png";
import image2 from "./assets/others/space-website.png";
import image3 from "./assets/others/cosplay-conex.png";




const seventhPage = () => {
  return (
    <div className={seventhPageCSS.seventhPageMainContainer}>
      <h1 className={seventhPageCSS.title}>Other Notable Projects</h1>
      <div className={seventhPageCSS.leftContainer}>

        <div className={seventhPageCSS.card}>
          <div className={seventhPageCSS.imageContainer}><Image className={seventhPageCSS.image} src={image1} alt="past the treeline img"/></div>
          <div className={seventhPageCSS.descriptionContainer}>
            <h3>Past the Treeline</h3>
            <span className={seventhPageCSS.readMore}>Read More</span>
          </div>
        </div>
        
      <div className={seventhPageCSS.card}>
          <div className={seventhPageCSS.imageContainer}>
            <video  className={seventhPageCSS.image}  autoPlay muted loop >
              <source src="/videos/jjk-website.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={seventhPageCSS.descriptionContainer}>
            <h3>Cursed Technique Jquery Website</h3>
            <span className={seventhPageCSS.readMore}>Read More</span>
          </div>
        </div>

      </div>
      <div className={seventhPageCSS.rightContainer}>

          <div className={seventhPageCSS.card}>
          <div className={seventhPageCSS.imageContainer}>
            <video  className={seventhPageCSS.image}  autoPlay muted loop >
              <source src="/videos/genshin-website.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={seventhPageCSS.descriptionContainer}>
            <h3>Genshin Impact Website</h3>
            <span className={seventhPageCSS.readMore}>Read More</span>
          </div>
        </div>
        
        <div className={seventhPageCSS.card}>
          <div className={seventhPageCSS.imageContainer}><Image className={seventhPageCSS.image} src={image2} alt="space parallax img"/></div>
          <div className={seventhPageCSS.descriptionContainer}>
            <h3>Parallax Space Web</h3>
            <span className={seventhPageCSS.readMore}>Read More</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default seventhPage

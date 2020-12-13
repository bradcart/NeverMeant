import React from "react"
import Link from "gatsby-plugin-transition-link"
// import AudioPlayer from "react-h5-audio-player"
// import "react-h5-audio-player/src/styles.scss"
// import Homecoming from "../sounds/homecoming.mp3"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div className="section">
    {/* <div className="navbar-audio-player">
      <audio src={Homecoming} controls autoPlay/>
    </div> */}
    <div className="landing">
      <h1 className="title">NEVER MEANT</h1>
      <h1 className="subtitle">AUSTIN TEXAS EMO</h1>
      {/* <h6 className={videoStyles.links}>
        <span className={videoStyles.link}>about</span>
        <pre className={videoStyles.x}>  ✘  </pre>
        <span className={videoStyles.link}>stream</span>
        <pre className={videoStyles.x}>  ✘  </pre>
        <span className={videoStyles.link}>store</span>
      </h6> */}
    </div>
    <div className="links">
      <Link to="about">
        <h6 className="link">about</h6>
      </Link>
      <a
        href="https://open.spotify.com/artist/12mp6G5b4qmwxGyB5d5q4a"
        target="_blank"
        rel="noreferrer"
      >
        <h6 className="link">music</h6>
      </a>
      <a
        href="https://nevermeanttx.bigcartel.com/"
        target="_blank"
        rel="noreferrer"
      >
        <h6 className="link">merch</h6>
      </a>
    </div>
    <video autoPlay loop muted playsInline className="video">
      <source src={require(`../images/nm_clip.mp4`)} type="video/mp4" />
    </video>
    {/* <div className={videoStyles.footer}>
      <span className={videoStyles.copyright}>© 2020</span> brad carter
    </div> */}
    {/* <button className={videoStyles.button}>about us</button> */}
  </div>
)

export default IndexPage

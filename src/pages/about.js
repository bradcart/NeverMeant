import React from "react"
import Link from "gatsby-plugin-transition-link"
// import { motion } from "framer-motion"
import Image from "../components/image"
import LeftArrow from "../assets/left-arrow-ai.svg"
import Spotify from "../images/spotify.png"
import AppleMusic from "../images/apple-music.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"

const AboutPage = () => (
  <div className="grid">
    <Link to="/" className="back-btn-wrapper">
      <LeftArrow className="back-btn" />
    </Link>
    <p className="paragraph-1">
      <span className="bold">Never Meant </span> is a Texas emo band formed in
      2018 by drummer Rafael Garcia and guitarist/vocalist Michael Hancock.
      Hailing from Denison, Texas, Michael and Rafael moved to Austin in 2018 to
      pursue music, where they recorded their first EP titled <b>Homecoming</b>{" "}
      at{" "}
      <a
        href="https://www.overcastrecordings.com/"
        target="_blank"
        rel="noreferrer"
        className="paragraph-link"
      >
        Overcast Recordings
      </a>
      .
    </p>
    <div className="img-1">
      <Image src={1} />
    </div>
    <div className="img-2">
      <Image src={2} />
    </div>
    <div className="row-2">
      <p className="paragraph-2">
        It was there they met producer Kieran Krebs, who later joined the band
        to fill the role of bassist. Never Meant tells stories of heartbreak,
        dealing with mental illness, and balancing survival and happiness while
        learning how to love yourself and stay true to who you are.
      </p>
      <div className="listen-now">
        <a
          className="bolder"
          href="https://linktr.ee/nevermeanttx"
          target="_blank"
          rel="noreferrer"
        >
          Listen Now &#62;&#62;
        </a>
        <p className="go-back">
          or click{" "}
          <Link to="/" className="go-back--here">
            here
          </Link>{" "}
          to go back.
        </p>
      </div>
      <div className="about-footer">
        <a
          href="https://open.spotify.com/artist/12mp6G5b4qmwxGyB5d5q4a"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Spotify} alt="Spotify link" className="link--spotify" />
        </a>
        <a
          href="https://music.apple.com/us/artist/never-meant/1461719465"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={AppleMusic}
            alt="Apple Music link"
            className="link--apple"
          />
        </a>
        <a
          href="https://www.facebook.com/nevermeanttx"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Facebook} alt="Facebook link" className="link--facebook" />
        </a>
        <a
          href="https://www.instagram.com/nevermeanttx/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={Instagram}
            alt="Instagram link"
            className="link--instagram"
          />
        </a>
      </div>
    </div>
  </div>
)

export default AboutPage

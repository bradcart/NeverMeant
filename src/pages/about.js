import React from "react"
import Image from "../components/image"
import LeftArrow from "../assets/left-arrow-ai.svg"
import Spotify from "../images/spotify.png"
import AppleMusic from "../images/apple-music.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"

const AboutPage = () => (
  <div className="grid">
    <LeftArrow className="back-btn" />
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
        <div className="bolder">Listen Now &#62;&#62;</div>
        <p className="go-back">
          or click <span style={{ fontWeight: 700 }}>here</span> to go back.
        </p>
      </div>
      <div className="about-footer">
        <img src={Spotify} alt="Spotify link" style={{ width: "4.5vw" }} />
        <img
          src={AppleMusic}
          alt="Apple Music link"
          style={{ width: "4.25vw" }}
        />
        <img src={Facebook} alt="Facebook link" style={{ width: "4.6vw" }} />
        <img src={Instagram} alt="Instagram link" style={{ width: "4.6vw" }} />
      </div>
    </div>
  </div>
)

export default AboutPage

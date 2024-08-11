import React from 'react'
import "./Hero.css"
import feed from "../../assets/feednack.png"
import slide from "../../assets/slide3.png.png"

export default function Hero() {
  return (
    <>
    <div className="Hero-main-container">
        <img src={feed} className='hero-feedback-image' alt="" />
        <img src={slide} className='hero-slide-image' alt="" />
    </div>
    </>
  )
}

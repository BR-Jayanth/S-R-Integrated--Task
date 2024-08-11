import React from 'react'
import "./HeroMain.css"
import btnImg from '../../assets/createMyLogoBtn.png'
import Hero from '../Hero/Hero'

export default function HeroMain() {
    return (
        <>
         
                <div className="heromain-maincontainer">

                    <div className="heromain-content">
                        <div className="heromain-content-a">
                            Create a unique, professional logo for your business
                        </div>
                        <div className="heromain-content-b">
                            Kickstart your brand with business card designs, social media graphics, app icons, letter heads and more
                        </div>
                        <div className="heromain-content-btn">
                            <button>Create my logo
                                <img src={btnImg} alt="" />
                            </button>

                        </div>
                    </div>

                </div>
             

        </>
    )
}

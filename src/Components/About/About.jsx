import React from 'react'
import "./About.css"
import img1 from "../../assets/aboutlast.png"

export default function About() {
    return (
        <>
            <div className="about-main-conatiner">
                <div className="about-box1">
                    <div className="about-box1-col1">
                        <div className="about-box1-col-text1 yellow">
                            Create your logo
                            <div className="about-box1-col-text1-underline yellowback"></div>
                        </div>
                        <div className="about-box1-col-text2">
                            Try CreateBrand for free, no account needed
                        </div>
                    </div>
                    <div className="about-box1-col2">
                        <div className="about-box1-col-text1 pink">
                            Support
                            <div className="about-box1-col-text1-underline pinkback"></div>
                        </div>
                        <div className="about-box1-col-text2 ">
                            Have questions or need help? Start here
                        </div>
                    </div>
                    <div className="about-box1-col3">
                        <div className="about-box1-col-text1 green">
                            Tools
                            <div className="about-box1-col-text1-underline greenback"></div>
                        </div>
                        <div className="about-box1-col-text2">
                            Check out our free tools for color, font and logo <br />
                            design
                        </div>
                    </div>

                </div>
                <div className="about-box2">
                    <div className="about-box2-col1">
                        <div className="about-box2-text">
                            Terms of service
                        </div>
                    </div>
                    <div className="about-box2-col2">
                        <div className="about-box2-text">
                            Privacy policy
                        </div>
                    </div>
                    <div className="about-box2-col3">
                        <div className="about-box2-text">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        </div>
                    </div>
                </div>
                <div className="about-box3">
                    <img src={img1} alt="" />
                </div>
            </div>
        </>
    )
}

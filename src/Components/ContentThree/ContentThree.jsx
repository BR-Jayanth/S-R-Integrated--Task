import React from 'react'
import "./ContentThree.css"
import ContentTwo from '../ContentTwo/ContentTwo'
import img1 from "../../assets/settings.gif.png"
import img2 from "../../assets/arc.png"
import img3 from "../../assets/Background.png"

export default function ContentThree() {
    return (
        <>
            <div className="contentThree-main-container">
                <div className="contentThree-main-container-blue">

                </div>
                <div className="contentThree-main-container-white">

                </div>
                <div className="contentThree-main-container-content">
                    <div className="contentThree-main-container-content-heading">
                        <h1>Instantly customize and export</h1>
                        <h2>Right browser, no esigner or software needed</h2>
                    </div>
                    <div className="contentThree-main-container-content-body">
                        <div className="contentThree-main-container-content-body-left">
                            <div className="contentThree-main-container-content-body-left1">
                                <div className="contentThree-main-container-content-body-left1-heading">
                                    EXPORT TO ALL <br />
                                    MAJOR FORMATS
                                </div>
                                <div className="contentThree-main-container-content-body-left1-content">
                                    Including SVG, EPS, <br />
                                    PNG and PDF
                                </div>
                            </div>
                            <div className="contentThree-main-container-content-body-left1">
                                <div className="contentThree-main-container-content-body-left1-heading">
                                    EASILY EDIT <br />
                                    AND CUSTOMIZE
                                </div>
                                <div className="contentThree-main-container-content-body-left1-content">
                                    Double click to edit text
                                </div>
                                
                            </div>

                        </div>
                        <div className="contentThree-main-container-content-body-center">
                           <img src={img1} alt=""  id="setting"/>
                           <img src={img2} alt="" id="arc1"/>
                           <img src={img2} alt="" id="arc2"/>
                           <img src={img2} alt="" id="arc3"/>
                        </div>
                        <div className="contentThree-main-container-content-body-right">
                            <div className="contentThree-main-container-content-body-left1">
                                <div className="contentThree-main-container-content-body-left1-heading">
                                   ADJUST TEXT <br />
                                    AND IMAGE SIZE
                                </div>
                                <div className="contentThree-main-container-content-body-left1-content">
                                    Perfectly sized web <br />
                                    PNG and PDF
                                </div>
                            </div>
                            <img src={img3} alt="" id='b1' />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

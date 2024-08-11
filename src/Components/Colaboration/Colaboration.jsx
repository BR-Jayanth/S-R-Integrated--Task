import React from 'react'
import "./Colaboration.css"
import img1 from '../../assets/pink.png'
import img2 from "../../assets/ciela.png"
import img3 from "../../assets/the_local.png"
import img4 from "../../assets/youtui.png"
import img5 from "../../assets/funfit.png"
import img6 from "../../assets/goomoe.png"
import img7 from "../..//assets/wooly.png"
import img8 from "../../assets/nobs.png"
import img9 from "../../assets/monspace.png"
import img10 from "../../assets/coco.png"
import img11 from "../../assets/lizzty.png"
import img12 from "../../assets/pathbase.png"
import img13 from "../../assets/benson.png"
import img14 from "../../assets/colonetics.png"

export default function Colaboration() {
    return (
        <div className="colaboration-main-container">
            <div className="colaboration-pink-tails">
                <img src={img1} alt="" />
            </div>
            <div className="colaboration-box1">
                <div className="colaboration-box2-content">
                    <div className="colaboration-box2-content-text">
                        <div className="colaboration-box2-content-text-box1">
                            <div className="colaboration-box2-content-text-box1-text">
                                <div className='ddd'>
                                    Latest customer <br />
                                    creation
                                </div>

                                <div className="colaboration-box2-content-text-box1-underline"></div>
                            </div>
                        </div>
                        <div className="colaboration-box2-content-text-box2">
                            See why over 108,704 users have <br />
                            created a logo with CreateBrand.io
                        </div>
                    </div>
                    <div className="colaboration-box2-content-img">
                        <div className="colaboration-box1-img-left">
                            <img src={img2} alt="" />
                        </div>
                        <div className="colaboration-box1-img-right">
                            <div className="colaboration-box1-img-right-row-1">
                                <img src={img3} alt="" />
                            </div>
                            <div className="colaboration-box1-img-right-row-2">
                                <img src={img4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colaboration-box2">
                <div className="colaboration-box2-left">
                    <div className="colaboration-box2-left-row1">
                        <img src={img5} alt="" />
                        <img src={img6}alt="" />
                        <img src={img7} alt="" />
                    </div>
                    <div className="colaboration-box2-left-row2">
                        <img src={img8} alt="" />
                    </div>
                </div>
                <div className="colaboration-box2-right">
                  <div className="colaboration-box2-right-row1">
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                  </div>
                  <div className="colaboration-box2-right-row2">
                    <img src={img11} alt="" className='img1' />
                    <img src={img12} alt="" />
                  </div>
                  <div className="colaboration-box2-right-row3">
                    <img src={img13} alt="" />
                  </div>
                </div>
            </div>
            <div className="colaboration-box3">
                <img src={img14} alt="" />
            </div>
        </div>
    )
}

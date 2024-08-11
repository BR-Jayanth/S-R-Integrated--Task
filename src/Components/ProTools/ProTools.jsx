import React from 'react'
import "./ProTools.css"
import img1 from "../../assets/pink tool.png"
import img2 from "../../assets/bluetool.png"
import img3 from "../../assets/blacktool.png"
import img4 from "../../assets/greentool.png"
import img5 from "../../assets/yellowlogo.png"
import img6 from "../../assets/createMyLogoBtn.png"

export default function ProTools() {
    return (
        <>
            <div className="protools-main-container">
                <div className="protools-box1">
                    <div className="protools-box1-left">
                        <div className="protools-box1-left-row1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="protools-box1-left-row2 rowHeight">
                            <span className="left-row2-text1 green">Need atweak to your design?</span><br />
                            <span className="left-row2-text2 green">we'll do it for you,absolutely free</span>
                        </div>
                        <div className="protools-box1-left-row3">
                            <img src={img2} alt="" />
                        </div>
                        <div className="protools-box1-left-row4 rowHeight">
                            <span className="left-row2-text1 yellow">Full copyrights included</span><br />
                            <span className="left-row2-text2 yellow">For use in commercial and personal projects</span>
                        </div>
                        <div className="protools-box1-left-row5">
                            <img src={img3} alt="" />
                        </div>
                    </div>
                    <div className="protools-box1-right">
                        <div className="protools-box1-right-row1 rightHeight ">
                            <span className="left-row2-text1 pink">No more designer anxiety</span><br />
                            <span className="right-row2-text2 pink">Get your logo instantly, not in week</span>
                        </div>
                        <div className="protools-box1-right-row2">
                            <img src={img4} alt="" />
                        </div>
                        <div className="protools-box1-right-row3  rightHeight ">
                            <span className="right-row2-text1 voilet">No monthly charges</span><br />
                            <span className="right-row2-text2 voilet">Pay once, get acces to our branding tools forever</span>
                        </div>
                        <div className="protools-box1-right-row4">
                            <img src={img5} alt="" />
                        </div>
                        <div className="protools-box1-right-row5 rightHeight ">
                            <span className="right-row2-text1 black">Unlimited revisions</span><br />
                            <span className="right-row2-text2 black">Modify your logo at any time, even after purchase</span>
                        </div>

                    </div>
                </div>
                <div className="protools-box2">
                    <div className="protools-box2-box">
                        <div className="protools-box2-heading">
                            Create your unique logo design
                        </div>
                        <div className="protools-box2-content">
                            generate unlimited logos for free
                        </div>
                    </div>

                </div>
                <div className="protools-box3">
                   <div className="protools-box3-btn"> Create my logo</div>
                   <img src={img6} alt="" />
                </div>
            </div>
        </>
    )
}

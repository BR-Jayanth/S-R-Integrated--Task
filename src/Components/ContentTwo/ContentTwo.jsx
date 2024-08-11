import React from 'react'
import "./ContentTwo.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/i1.jpg.png"
import img3 from "../../assets/Background.png"
import img4 from "../../assets/phone.png"

export default function ContentTwo() {
    return (
        <>
            <div className="Content-main-container">
                <div className="content-box1">
                    <div className="content-box1-header">
                        <div className="content-box1-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="content-box1-content">
                            <div className="content-box1-content-text">
                                Build a beautiful brand
                                <br />
                                on time and on budget
                            </div>
                            <div className="content-box1-content-background">
                                <div className="content-box1-content-text2">
                                    Kickstart your business with thousands of <br />
                                    ready-to-use design assets.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="content-box1-body">
                        <div className="content-box1-body-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="content-box1-body-content">
                            <div className="content-box-body-list">
                                <ul className="content-list1">
                                    <li>Logo design files</li>
                                    <li>Animated designs</li>
                                    <li>Presentation templates</li>
                                </ul>
                                <ul className="content-list2">
                                    <li>Social profile</li>
                                    <li>Letterhead templates</li>
                                    <li>Brand guides</li>
                                </ul>
                                <ul className="content-list3">
                                    <li>Business card designs</li>
                                    <li>Social media designs</li>

                                </ul>
                            </div>
                            <div className="content-box1-body-link"> See example assets</div>
                        </div>


                    </div>
                </div>
                <div className="content-box2">
                    <div className="content-box2-img-top">
                        <img src={img3} alt="" />
                    </div>
                    <div className="content-box2-content">
                        <div className="content-box2-content-text">
                            <div className="content-box2-content-text-box1">
                                <div className="content-box2-content-text-box1-text">
                                    <div className='ddd'>
                                        The only logo <br />
                                        maker with free <br />
                                        customization
                                    </div>

                                    <div className="content-box2-content-text-box1-underline"></div>
                                </div>
                            </div>
                            <div className="content-box2-content-text-box2">
                                We'll personally help you customize <br />
                                your logo with the purchase of any <br />
                                package.
                            </div>
                        </div>
                        <div className="content-box2-content-img">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

import React from 'react'

function Footer() {
    return (
        <footer className="container  mb-5">
            <div className="row ">
                <div className="foot-list col-md-3 d-flex flex-column ">
                    <div className="footer-logo nomargin">
                        <span>Build</span><span style={{ color: 'rgba(187,107,217,1)' }}>IT</span>
                    </div>
                    <div className="nmargin">
                        <span> Easy-to-use website that will help you to make your own single page portfolio website in
                            just a few minutes</span>
                    </div>

                </div>
                <div className=" col-md-3 foot-list">
                    <h3 className="foot-title">Templates</h3>
                    <ul>
                        <li className="nmargin">Portfolio</li>
                        <li className="nmargin">Landing page</li>
                        <li className="nmargin">Services</li>
                    </ul>
                </div>
                <div className=" col-md-3 foot-list">
                    <h3 className="foot-title">Templates</h3>
                    <ul>
                        <li>Portfolio</li>
                        <li>Landing page</li>
                        <li>Services</li>
                        <li></li>

                    </ul>
                </div>
                <div className=" col-md-3 foot-list">
                    <h3 className="foot-title">Templates</h3>
                    <ul>
                        <li>Portfolio</li>
                        <li>Landing page</li>
                        <li>Services</li>
                        <li></li>

                    </ul>
                </div>
                <div className="amargin">
                    <span>All rights reserved. 2022</span>
                </div>
            </div>

        </footer>
    )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

function FirstSec() {
    return (
        <>

            <section className='pt-3'>
                <div className="container-fluid banner px-5 mt-5 pt-20">
                    <div className="row justify-content-between ">
                        <div className="col-sm-12 col-md-6 banner_first d-flex aligns-items-center justify-contents-center ">
                            {/* <!-- <div className="slider ">
                                <span className="align-middle"> slider container</span>
                            </div> --> */}


                        </div>
                        <div className="col-sm-12 col-md-6 banner_sec mt-5">
                            <div className="moto">
                                <span>Build your online presence here!</span>
                            </div>
                            <div className="discription">
                                <span> Easy-to-use website that will help you to make your own single page
                                    portfolio
                                    website in just a few minutes</span>
                            </div>
                            <div className=" d-flex flex-row bd-highlight  mt-5 button">

                                <div className="btn-first me-3">
                                    <Link className="item" to="/">Get started</Link>

                                </div>
                                <div className="btn-sec ">
                                    <Link className="item" to="/">Explore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FirstSec
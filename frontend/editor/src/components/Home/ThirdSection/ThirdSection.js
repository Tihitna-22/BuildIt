import React from 'react'
import { Link } from 'react-router-dom'

function ThirdSection() {
    return (
        <section className=" third-section  pt-3">
            <div className="container-fluid mx-5 ">
                <div className="row ">
                    <div className="col-12 price">
                        <span>Plans & Pricing</span>
                    </div>

                </div>
                <div className=" row py-5 ">
                    <div className="col-md-6 pe-2">
                        <p>Whether your time-saving automation needs are large or small, we’re here to help you
                            scale.</p>
                    </div>
                    <div className="col-6  ">
                        <div className="overlap d-flex flex-row">
                            <div className="btn-third p-1 ">
                                <Link className="item month" to="/">MONTHLY</Link>
                            </div>
                            <div className="btn-fourth p-1 ">
                                <Link className="item" to="/">YEARLY</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ThirdSection
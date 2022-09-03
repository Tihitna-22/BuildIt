import React from 'react'
import avator from '../../../assets/Ellipse_4.png'

function FifthSection() {
    return (
        <section className="fifth-section pt-5 ">
            <div className="container mt-5 pt-5">
                <h1 className="testimony">Our Testimonials</h1>
            </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row mx-auto">
                                    <div className="col-sm-10 col-md-3 card-test p-3">
                                        <div>
                                            “Buyer buzz partner network disruptive non-disclosure agreement business”
                                        </div>
                                        <div className="d-flex flex-row mt-5">
                                            <img src={avator} alt=""></img>
                                            <div className=" d-flex flex-column px-3 pt-3">
                                                <div>
                                                    Tihitna Sisay
                                                </div>
                                                <div>
                                                    manager@builtit
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-3 card-test">
                                        <div>
                                            “Buyer buzz partner network disruptive non-disclosure agreement business”
                                        </div>
                                        <div className="d-flex flex-row mt-5">
                                            <img src={avator} alt=""></img>
                                            <div className=" d-flex flex-column px-3 pt-3">
                                                <div>
                                                    Tihitna Sisay
                                                </div>
                                                <div>
                                                    manager@builtit
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-10 col-md-3 card-test">
                                        <div>
                                            “Buyer buzz partner network disruptive non-disclosure agreement business”
                                        </div>
                                        <div className="d-flex flex-row mt-5">
                                            <div className="d-flex flex-row mt-5">
                                                <div className=" d-flex flex-column px-3 pt-3">
                                                    <div>
                                                        Tihitna Sisay
                                                    </div>
                                                    <div>
                                                        manager@builtit
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row mx-auto">
                                        <div className="col-sm-10 col-md-3 card-test p-3">
                                            <div>
                                                “Buyer buzz partner network disruptive non-disclosure agreement business”
                                            </div>
                                            <div className="d-flex flex-row mt-5">
                                                <div className="d-flex flex-row mt-5">
                                                    <div className=" d-flex flex-column px-3 pt-3">
                                                        <div>
                                                            Tihitna Sisay
                                                        </div>
                                                        <div>
                                                            manager@builtit
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-10 col-md-3 card-test p-3">
                                                <div>
                                                    “Buyer buzz partner network disruptive non-disclosure agreement business”
                                                </div>
                                                <div className="d-flex flex-row mt-5">
                                                    <div className="d-flex flex-row mt-5">
                                                        <div className=" d-flex flex-column px-3 pt-3">
                                                            <div>
                                                                Tihitna Sisay
                                                            </div>
                                                            <div>
                                                                manager@builtit
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10 col-md-3 card-test">
                                                    <div>
                                                        “Buyer buzz partner network disruptive non-disclosure agreement business”
                                                    </div>
                                                    <div className="d-flex flex-row mt-5">
                                                        <div className="d-flex flex-row mt-5">
                                                            <div className=" d-flex flex-column px-3 pt-3">
                                                                <div>
                                                                    Tihitna Sisay
                                                                </div>
                                                                <div>
                                                                    manager@builtit
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FifthSection
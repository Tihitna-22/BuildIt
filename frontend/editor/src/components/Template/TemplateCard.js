import React from 'react'
import { Link } from 'react-router-dom'

function TemplateCard() {
    return (
        <>
            <section className="mt-2 templates">
                <div>
                    <div className="container py-5">
                        <h4 className="text-center mb-5"><strong>Portfolio Templates</strong></h4>

                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 card-temp">
                                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                                        className="w-100" alt=''></img>
                                    <div >
                                        <div className="prev">
                                            <div className="mask" style={{ backgroundCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                                                <div className="d-flex justify-content-start align-items-end h-100">
                                                    <Link className="card-button" to="/">preview</Link>
                                                </div>
                                            </div>
                                            <div className="mask" style={{ backgrounCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                                                <div className="d-flex justify-content-end align-items-end h-100">
                                                    <Link className="card-button" to="/">Edit</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hover-overlay">
                                            <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="container py-5">
                        <h4 className="text-center mb-5"><strong>Landing Page Templates</strong></h4>

                        <div className="row">
                            <div className="col-lg-6 col-md-12 mb-4 card-temp">
                                <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(1).webp"
                                        className="w-100" alt=''></img>
                                    <div>
                                        <div className="prev">
                                            <div className="mask" style={{ backgrounCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                                                <div className="d-flex justify-content-start align-items-end h-100">
                                                    <Link className="card-button" to="/">preview</Link>
                                                </div>
                                            </div>
                                            <div className="mask" style={{ backgrounCcolor: 'rgba(0, 0, 0, 0.3)' }}>
                                                <div className="d-flex justify-content-end align-items-end h-100">
                                                    <Link className="card-button" to="/editor">Edit</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="hover-overlay">
                                            <div className="mask" style={{ backgroundColor: 'rgba(253, 253, 253, 0.15)' }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>


            </section >
        </>
    )
}

export default TemplateCard
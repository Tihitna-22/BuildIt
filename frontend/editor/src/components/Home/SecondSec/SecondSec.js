import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../../assets/Rectangle_1270@2x.png'

function SecondSec() {
    return (
        <section className="second-section container-fluid">
            <div className="about row justify-content-between ">
                <div className="title col-8 moto py-5">
                    <span>Grow your online exposure with us!</span>
                </div>
                <div className="about-bu row justify-content-between ">
                    <div className="about_img_container col-sm-12 col-md-3">
                        <div className="about_img">
                            <img className="rounded mx-auto d-block" src={img} alt=""></img>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 d-flex flex-column ">
                        <div className="d-flex flex-row">
                            <span className="num">1</span>
                            <div className="side mt-5 mx-5 px-1 d-flex flex-column">
                                <span className="list_title">create youre portfolio site</span>
                                <span className="list-disc">Tell the world about who you are with our elegent designs
                                </span>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <span className="num">2</span>
                            <div className="side mt-5 mx-5 px-1 d-flex flex-column">
                                <span className="list_title">create youre portfolio site</span>
                                <span className="list-disc">Tell the world about who you are with our elegent designs
                                </span>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <span className="num">3</span>
                            <div className="side mt-5 mx-5 px-1 d-flex flex-column">
                                <span className="list_title">create youre portfolio site</span>
                                <span className="list-disc">Tell the world about who you are with our elegent designs
                                </span>
                            </div>
                        </div>
                        <div className="ms-5 ps-5 mb-5 button">
                            <div className="btn-first me-3">
                                <Link className="item" to="/">Get started</Link>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default SecondSec
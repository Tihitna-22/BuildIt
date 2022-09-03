import React from 'react'

function SixthSection() {
    return (
        <section className="sixth-section ">
            <div className="mt-5 subscribe my-auto d-flex flex-column justify-content-center ">

                <div className="title sub-title col-md-8 col-sm-12 moto py-5">
                    <span>Let’s Build<span style={{ color: 'rgba(187,107,217,1)' }}>IT</span>!</span>
                </div>
                <div className="d-md-flex flex-row justify-content-center aligns-items-center mt-5">
                    <div className="email-contain mx-4">
                        <input className='email ' type="email" name="email" id="" placeholder="Your Email adress"></input>
                    </div>
                    <div className="mt-xs-4 mt-sm-5 mt-md-0">
                        <button className='sub-button mx-sm-4  '>Start Now</button>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default SixthSection
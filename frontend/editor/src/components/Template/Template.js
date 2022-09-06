import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Home/Footer/Footer'
import Nav from '../Home/Nav/Nav'
import TemplateCard from './TemplateCard'

function Template() {
    return (
        <>
            <Nav />
            <section className="mt-5 pt-5">
                <div className="btn-group mt-4 d-flex justify-content-start  catagory">
                    <div className="btn-group shadow-0  ms-5">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-mdb-toggle="dropdown" aria-expanded="false">
                            Catagories
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li ><Link className="dropdown-item" to="/">All</Link></li>
                            <li><Link className="dropdown-item" to="/">Portfolio</Link></li>
                            <li><Link className="dropdown-item" to="#">Landing Page</Link></li>
                        </ul>
                    </div>

                </div>
            </section>
            <TemplateCard />

            <Footer />

        </>
    )
}

export default Template
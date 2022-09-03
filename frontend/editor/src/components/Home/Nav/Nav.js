import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/final.png'

function Nav() {
    return (
        <header className="container-md header mx-1">
            <nav className="navbar navbar-expand-lg fixed-top px-5">
                <img src={logo} alt=""></img>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav  ms-auto">
                        <a className="nav-item nav-link active" href="/">Products</a>
                        <a className="nav-item nav-link" href="/">Resources</a>
                        <a className="nav-item nav-link" href="/template">Template</a>
                        <a className="nav-item nav-link Log_In" href="/login">log in</a>
                    </div>
                </div>
            </nav>

        </header>

    )
}

export default Nav
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaBookOpen, FaBook, FaSave } from 'react-icons/fa';
import '../main.scss';


function Dashboard({ editor }) {

    console.log(editor)

    return (
        <div className='Dashboard'>
            <div id='navbar' className='sidenav d-flex flex-column overflow-scroll'>
                <nav className='navbar navbar-light'>
                    <div className='container-fluid'>
                        <span className='navbar-brand mb-0 h3 logo'>Build<span className='logo-text'>It</span></span>
                    </div>
                </nav>
                <div className='my-5 d-flex flex-column '>
                    <ul className='list-group pages'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <Link className="Links" to="/pages"><FaBookOpen />
                                <span className='Linkstext'><b>Pages</b></span>
                            </Link></li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <Link className='Links' to="/editor"><FaCode />
                                <span className='Linkstext'><b>Editor</b></span>
                            </Link></li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <Link className='Links' to="/"><FaBook />
                                <span className='Linkstext'><b>Publish</b></span>
                            </Link></li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                            <button className='Links' ><FaSave />
                                <span className='Linkstext'><b>Save</b></span>
                            </button></li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Dashboard
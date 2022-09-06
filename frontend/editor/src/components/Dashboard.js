import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaBookOpen, FaBook, FaSave } from 'react-icons/fa';
import '../main.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import grapesjs from 'grapesjs';



function Dashboard() {


    const { id } = useParams()
    const [edi, setEdi] = useState(null)
    const [saveContent, setSaveContent] = useState(null)




    useEffect(() => {

        const editor = grapesjs.init({
            container: "#editor",

            storageManager: {
                type: 'remote',
                autosave: true, // Store data automatically
                urlStore: `http://localhost:8000/page-update/${id}`
            }
        })
        editor.Panels.addButton
            ('options',
                [{
                    id: 'save-db',
                    className: 'fa fa-floppy-o',
                    command: 'save-db',
                    attributes: { title: 'Save DB' }
                }]
            );

        setEdi(editor)


    }, [])

    // console.log(editor)

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
                            <button className='Links' onClick={saveContent}><FaSave />
                                <span className='Linkstext'><b>Save</b></span>
                            </button></li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Dashboard
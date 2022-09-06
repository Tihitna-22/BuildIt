import { useEffect, useState, useRef } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import 'bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaCode, FaBookOpen, FaBook, FaSave } from 'react-icons/fa';
import '../main.scss';

function EditorConfig() {
    const { id } = useParams()
    // const [temp, setTemp] = useState([])
    const [editor, setEditor] = useState(null)
    // const [htmlUpdate, sethtmlUpdate] = useState(null)
    // const [cssUpdate, setcssUpdate] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:8000/page-detail/${id}/`).then((response) => {
            const html = response.data.html
            const css = response.data.css
            const temp = `${html}<style>${css}</style>`
            // setTemp(temp)
            editor.addComponents(`<div>
            ${temp}
          </div>`);

            // const htmlUpdate = editor.getHtml()
            // sethtmlUpdate(htmlUpdate)
        })
        // axios.post(`http://localhost:8000/page-update/${id}/`).then((response) => {
        // const html = response.data.html
        // const css = response.data.css
        // const temp = `${html}<style>${css}</style>`
        // setTemp(temp)
        //     editor.addComponents(`<div>
        //     ${temp}
        //   </div>`);

        //     const htmlUpdate = editor.getHtml()
        //     const cssUpdate = editor.getCss()
        //     sethtmlUpdate(htmlUpdate)
        //     setcssUpdate(cssUpdate)
        // })

        const editor = grapesjs.init({
            container: "#editor",
            fromElement: true,
            clearOnRender: true,
            width: "auto",
            // storageManager: false,
            plugins: [gjsPresetWebpage],
            pluginsOpts: {
                gjsPresetWebpage: {},
            },
            canvas: {
                scripts: [
                    "https://cdn.tailwindcss.com"
                ]
            },
            // storageManager: {
            //     type: 'remote',
            //     autosave: true, // Store data automatically
            //     urlStore: `http://localhost:8000/page-update/${id}`
            // }
            storageManager: {
                autosave: false,
                setStepsBeforeSave: 1,
                type: 'remote',
                urlStore: `http://localhost:8000/`,
                urlLoad: '',
                contentTypeJson: true,
            }
        })
        setEditor(editor)

        editor.Panels.addButton
            ('options',
                [{
                    id: 'save-db',
                    className: 'fa fa-floppy-o',
                    command: 'save-db',
                    attributes: { title: 'Save DB' }
                }]
            );

        // Add the command
        editor.Commands.add
            ('save-db',
                {
                    run: function (editor, sender) {
                        sender && sender.set('active', 0); // turn off the button
                        editor.store();

                        var htmldata = editor.getHtml();
                        var cssdata = editor.getCss();
                        console.log(htmldata);
                        console.log(cssdata);
                        // id ? /editPage/${id} : 'page/create'
                        id ?
                            axios.post(`http://localhost:8000/page-update/${id}/`,
                                {
                                    "name": "untitled",
                                    "description": "no description",
                                    "html": htmldata,
                                    "css": cssdata
                                }) : axios.post(`http://localhost:8000/page-create/`,
                                    {
                                        "name": "untitled",
                                        "description": "no description",
                                        "html": htmldata,
                                        "css": cssdata
                                    })
                    }
                });
        editor.on('storage:load', function (e) { console.log('Loaded ', e); });
        editor.on('storage:store', function (e) { console.log('Stored ', e); });




    }, [])

    // const { id } = useParams()
    // const [temp, setTemp] = useState([])
    // console.log()    // const [editor, setEditor] = useState(null)



    // useEffect(() => {
    // axios.get(`http://localhost:8000/page-detail/${id}/`).then((response) => {
    //     const html = response.data.html
    //     const css = response.data.css
    //     const temp = `${html}<style>${css}</style>`
    //     // setTemp(temp)
    //     editor.addComponents(`<div>
    //     ${temp}
    //   </div>`);
    // })


    // const editor = grapesjs.init({
    //     container: "#editor",
    //     fromElement: true,
    //     width: "auto",
    //     storageManager: false,
    //     plugins: [gjsPresetWebpage],
    //     pluginsOpts: {
    //         gjsPresetWebpage: {},
    //     },
    //     canvas: {
    //         scripts: [
    //             "https://cdn.tailwindcss.com"
    //         ]
    //     },
    // })
    // setEditor(editor)

    // }, [])
    return (
        <>
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
                                <button className='Links'><FaSave />
                                    <span className='Linkstext'><b>Save</b></span>
                                </button></li>
                        </ul>

                    </div>

                </div>
            </div>
            <div className='main-content'>
                <div id='editor'>
                </div>
            </div>
        </>

    )

}

export default EditorConfig
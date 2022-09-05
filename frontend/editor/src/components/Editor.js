import React from 'react';
import EditorConfig from './EditorConfig';
import '../main.css';
import Dashboard from './Dashboard';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { useParams } from 'react-router-dom';





function Editor() {
    const { id } = useParams()
    const [temp, setTemp] = useState([])
    // const [id, setCsst] = useState('')
    // const { id } = useParams()
    // console.log(id)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pages/${id}/`).then((response) => {
            const html = response.data.html
            // console.log(res)
            // return res
            const css = response.data.css
            const template = `${html}<style>${css}</style>`
            setTemp(template)
            console.log(template)
            // setCsst(css)
        })
    }, [id])


    EditorConfig();
    // apend()
    return (
        <div className='App' >

            <Dashboard />
            <div className='main-content'>
                <div id='editor'>
                    <div>
                        <h1>{id}</h1>
                        <div dangerouslySetInnerHTML={{ __html: temp }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;

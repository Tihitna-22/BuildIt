import React, { useEffect } from 'react';
import EditorConfig from './EditorConfig';
import '../main.css';
import Dashboard from './Dashboard';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// useParams

function Editor() {
    const { id } = useParams()
    // const [temp, setTemp] = useState([])
    const [editor, setEditor] = useState(null)
    const [htmlUpdate, sethtmlUpdate] = useState(null)
    const [cssUpdate, setcssUpdate] = useState(null)

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
            width: "auto",
            storageManager: false,
            plugins: [gjsPresetWebpage],
            pluginsOpts: {
                gjsPresetWebpage: {},
            },
            canvas: {
                scripts: [
                    "https://cdn.tailwindcss.com"
                ]
            },
        })
        setEditor(editor)


    }, [])

    return (
        <div className='App' >

            <Dashboard editor={htmlUpdate} />
            <EditorConfig />
        </div>
    );
}

export default Editor;

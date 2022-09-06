import { useEffect, useState, useRef } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import 'bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom'

function EditorConfig({ editor }) {

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
        <div className='main-content'>
            <div id='editor'>
            </div>
        </div>
    )

}

export default EditorConfig
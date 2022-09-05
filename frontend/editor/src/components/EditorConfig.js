import { useEffect, useState, useRef } from 'react';
import grapesjs from 'grapesjs';
import gjsPresetWebpage from 'grapesjs-preset-webpage';
import 'bootstrap';


function EditorConfig() {
    const [editor, setEditor] = useState(null);

    useEffect(() => {
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
                ],
                // components: [
                //     '<h1 class="testh">Title frame</h1>',
                //     '<p class="testp">Paragraph frame</p>',
                // ],
                // styles: `
                //     .testh { color: red; }
                //     .testp { color: blue; }
                //   `,
            },
            panels: {
                defaults: [
                    {
                        id: "basic-actions",
                        el: ".panel__basic-actions",
                        buttons: [

                            {
                                id: "save",
                                className: "fa fa-paper-plane",
                                command: "save",
                            },
                        ]
                    }]
            }

        })
        // const apend = document.getElementsById("iatj")
        // console.log(apend)

        setEditor(editor);
        // apend()

        // const canvas = editor.Canvas;
        // canvas.addFrame({
        //     name: 'Mobile home page',
        //     x: 100, // Position in canvas
        //     y: 100,
        //     width: 500, // Frame dimensions
        //     height: 600,
        //     // device: 'DEVICE-ID',
        //     components: [
        //         '<h1 class="testh">Title frame</h1>',
        //         '<p class="testp">Paragraph frame</p>',
        //     ],
        //     styles: `
        //       .testh { color: red; }
        //       .testp { color: blue; }
        //     `,
        // });

    }, []);

}

export default EditorConfig
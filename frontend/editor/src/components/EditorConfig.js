import { useEffect, useState } from 'react';
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
            
            

        })
        setEditor(editor);
    }, []);

}

export default EditorConfig
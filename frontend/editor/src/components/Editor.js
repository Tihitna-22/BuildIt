import React from 'react';
import EditorConfig from './EditorConfig';
import '../main.scss';
import Dashboard from './Dashboard';


function Editor() {
    EditorConfig();
    return (
        <div className="App">
            <Dashboard />
            <div className='main-content'>
                <div id='editor'></div>
            </div>
        </div>
    );
}

export default Editor;

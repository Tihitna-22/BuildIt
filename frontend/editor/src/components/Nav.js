import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='Nav'>
            <Link to='/'>Home</Link>
            <Link to='/editor'>Editor</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default Nav
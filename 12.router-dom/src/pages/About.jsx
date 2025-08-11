import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function About() {

    return (
        <div>
            <h1>About Page</h1>
            <hr />
            <Link className='link' to='employee'>Çalışanlar hakkında</Link>
            <Link className='link' to='company'>Şirket About</Link>
            <Outlet />
        </div>
    )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'
function Header() {

    return (
        <div className='header'>
            <Link className='link' to="/">
                Anasayafa
            </Link>

            <Link className='link' to="/about">
                Hakkımda
            </Link>

            <Link className='link' to="/products">
                Ürünlerimiz
            </Link>

            <Link className='link' to="/contact">
                İletişim
            </Link>

        </div>
    )
}

export default Header
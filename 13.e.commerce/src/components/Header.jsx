import React, { useState } from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
function Header() {
    const [theme, setTheme] = useState(false);

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.background = "black";
            root.style.color = "#fff"
        } else {
            root.style.background = "#fff";
            root.style.color = "black"
        }
        setTheme(!theme)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row'>
                <img className='logo' src='./src/images/logo.png' />
                <p className='logo-text'>Serhat A.Ş</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='search' />
                <div>
                    {theme ? <FaMoon onClick={changeTheme} className='icon' /> : <CiLight className='icon' onClick={changeTheme} />}

                    <CiShoppingBasket className='icon' />
                </div>
            </div>
        </div>
    )
}

export default Header
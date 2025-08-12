import React, { useState } from 'react'
import '../css/Header.css';
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';


function Header() {
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate();
    const { products } = useSelector((store) => store.basket)
    const dispatch = useDispatch();
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
                <img className='logo' src='./src/images/logo.png' onClick={() => navigate("/")} />
                <p className='logo-text'>Serhat A.Ş</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='search' />
                <div>
                    {theme ? <FaMoon onClick={changeTheme} className='icon' /> : <CiLight className='icon' onClick={changeTheme} />}
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="primary">

                        <CiShoppingBasket className='icon' />
                    </Badge>

                </div>
            </div>
        </div>
    )
}

export default Header
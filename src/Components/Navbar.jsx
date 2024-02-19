import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../assets/Styles/Navbar.module.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isNavListActive, setNavListActive] = useState(false);

    const handleNavToggle = () => {
        setNavListActive(!isNavListActive);
    };

    return (
        <div className={style.NavDiv}>
            <img
                className={style.imgNav}
                src="/logo.png"  // Update the path to your logo
                alt=""
                onClick={() => navigate('/')}
            />
            <div
                className={`${style.NavListToggle} ${isNavListActive ? style.active : ''}`}
                onClick={handleNavToggle}
            >
                <div className={style.toggleIcon}>|||</div>
            </div>
            <ul className={`${style.NavList} ${isNavListActive ? style.active : ''}`}>
                <li onClick={() => navigate('/batches')}>Batches</li>
                <li onClick={() => navigate('/enquiry')}>Enquiry</li>
                <li onClick={() => navigate('/fees')}>Fees</li>
                <li onClick={() => navigate('/newAdmin')}>New Admin</li>
                <li onClick={() => navigate('/reports')}>Reports</li>
                <li onClick={() => navigate('/users')}>Users</li>
            </ul >
        </div >
    );
};

export default Navbar;
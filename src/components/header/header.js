import React from 'react'
import './header.css'
import LOGO from '../../asset/logo.png' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
        <div className='d-flex justify-content-between align-items-center header'>
            <img src={LOGO} alt='log_img'/>
            <input type='serch' placeholder='Search the products' />
            <div className='d-flex'>
                <Link to={'/home'} className="ms-2 text-decoration-none text-reset"><div className='px-3 headdet' ><i className="fa-solid fa-house px-2"></i>Home</div></Link>
                <Link to={'/login'} className="ms-2 text-decoration-none text-reset"><div className='px-3 headdet' ><i className="fa-solid fa-right-to-bracket px-2"></i>Login</div></Link>
                <Link to={'/signup'} className="ms-2 text-decoration-none text-reset"><div className='px-3 headdet' ><i className="fa-solid fa-user-plus px-2"></i>SignUp</div></Link>
                <div className='px-3 headdet' ><i className="fa-solid fa-cart-shopping px-2"></i>Cart</div>
            </div>
        </div>

        </>
    )
}

export default Header

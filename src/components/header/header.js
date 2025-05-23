import React, { useContext, useState } from 'react'
import './header.css'
import LOGO from '../../asset/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { productSerch } from '../context/context';


function Header() {
    const [reshead,setReshead]=useState(false)
    const { serchinpu,setSerchinpu } = useContext(productSerch)

    return (
        <>
            <div className='d-flex justify-content-between align-items-center header'>
                <img src={LOGO} alt='log_img' />
 
                    <input type='serch' placeholder='Search the products' onChange={(e)=>setSerchinpu(e.target.value)} />

                <div className='d-flex'>
                    <Link to={'/home'} className="ms-2 text-decoration-none text-reset menuiconold"><div className='px-3 headdet' ><i className="fa-solid fa-house px-2"></i>Home</div></Link>
                    <Link to={'/login'} className="ms-2 text-decoration-none text-reset menuiconold"><div className='px-3 headdet' ><i className="fa-solid fa-right-to-bracket px-2"></i>Login</div></Link>
                    <Link to={'/signup'} className="ms-2 text-decoration-none text-reset menuiconold"><div className='px-3 headdet' ><i className="fa-solid fa-user-plus px-2"></i>SignUp</div></Link>
                    <Link to={'/editproducts'} className="ms-2 text-decoration-none text-reset menuiconold"><div className='px-3 headdet' ><i className="fa-solid fa-user-plus px-2"></i>Products</div></Link>
                    <div className='px-3 headdet menuiconold' ><i className="fa-solid fa-cart-shopping px-2 "></i>Cart</div>
                    {reshead ? <div onClick={()=>setReshead(false)} className='px-3 headdet menuicon'><i className="fa-solid fa-xmark px-2"></i></div>:
                    <div onClick={()=>setReshead(true)} className='px-3 headdet menuicon'><i className="fa-solid fa-bars px-2"></i></div>}


                </div>
            </div>
            {reshead?
            <div className='headerresponce'>
            <Link to={'/home'} className="ms-2 text-decoration-none text-reset"><div className='px-3 headdet' ><i className="fa-solid fa-house px-2"></i>Home</div></Link>
                    <Link to={'/login'} className="ms-2 text-decoration-none text-reset"><div className='px-3 headdet' ><i className="fa-solid fa-right-to-bracket px-2"></i>Login</div></Link>
                    <Link to={'/signup'} className="ms-2 text-decoration-none text-reset"><div className='px-3 headdet' ><i className="fa-solid fa-user-plus px-2"></i>SignUp</div></Link>
                    <Link to={'/editproducts'} className="ms-2 text-decoration-none text-reset"><div className='px-3 headdet' ><i className="fa-solid fa-user-plus px-2"></i>Products</div></Link>
                    
            </div>:<></>}
        </>
    )
}

export default Header

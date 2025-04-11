import React, { useEffect, useState } from 'react'
import './categories.css'
import { Link } from 'react-router-dom'


function Menclothing() {
    const [menc, setMenc] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then((res) => res.json())
            .then((json) => setMenc(json))
    }, [])
    return (
        <>
            <div className='sm-nav'>
                <ul>
                    <li className='p-2'><Link to={'/productall'}>All Products</Link></li>
                    <li className='p-2'><Link to={'/electronics'}>Electronics</Link></li>
                    <li className='p-2'><Link to={"/jewelery"}>Jewelery</Link></li>
                    <li className='p-2'><Link to={"/men's clothing"}>Mens Cloth</Link></li>
                    <li className='p-2'><Link to={"/women's clothing"}>WoMens Cloth</Link></li>

                </ul>
            </div>
            <div className='d-flex productall flex-wrap gap-4 justify-content-center '>
                {menc.map((v, i) => {
                    return (
                        <Link to={`/${v.id}`}  className="ms-2 text-decoration-none text-reset">
                        <div className='productall_child' key={i}>
                            <img src={v.image} />
                            <p className='text-truncate' style={{ width: '200px' }} > {v.title}</p>
                            <h6><span className='star'>{v.rating.rate}<i className="fa-solid fa-star"></i></span><span className='text-secondary'>({v.rating.count})</span></h6>
                            <h5>$ {v.price}</h5>
                        </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default Menclothing

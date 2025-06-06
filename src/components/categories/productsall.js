import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { productSerch } from '../context/context';

function Productsall() {
    const [product, setProduct] = useState([]);
    const { serchinpu } = useContext(productSerch);

    const filtered = product.filter((product) =>
        product.title.toLowerCase().includes(serchinpu.toLowerCase()) ||
        product.price.toString().includes(serchinpu)
    )


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                return (
                    setProduct(json)
                )
            })
    }, [])
    return (
        <>
            <div className='sm-nav'>
                <ul>
                    <li className='p-2'><Link to={'/productall'}>All</Link></li>
                    <li className='p-2'><Link to={'/electronics'}>Electronics</Link></li>
                    <li className='p-2'><Link to={"/jewelery"}>Jewelery</Link></li>
                    <li className='p-2'><Link to={"/men's clothing"}>Mens</Link></li>
                    <li className='p-2'><Link to={"/women's clothing"}>WoMens</Link></li>

                </ul>
            </div>
            <div className='d-flex productall flex-wrap gap-4 justify-content-center '>
                {filtered.map((v, i) => {
                    return (
                        <Link to={`/${v.id}`} className="ms-2 text-decoration-none text-reset" key={i}>
                            <div className='productall_child' >
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

export default Productsall

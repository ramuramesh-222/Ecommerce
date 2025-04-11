import React, { useEffect, useState } from 'react'
import Electron from '../../asset/electron.png'
import Jewels from '../../asset/jelwary.png'
import MenC from '../../asset/mensclouth.png'
import WomenC from '../../asset/womensclouth.png'
import './categories.css'
import { Link, Outlet } from 'react-router-dom'
import Saleimg from '../../asset/bg-sale.jpg'

function Categories() {
    const [categorielist, setCategorielist] = useState([]);
    const imgages = {
        "electronics": Electron,
        "jewelery": Jewels,
        "men's clothing": MenC,
        "women's clothing": WomenC
    };


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((json) => setCategorielist(json))
    }, [])
    return (
        <>
        <div className='saleimg'>
            <img src={Saleimg}/>
        </div>
            <div className='d-flex justify-content-center gap-4 my-4 '>
                {categorielist.map((v, i) => {
                    return <Link key={i} className='linknavi' to={`/${v}`}>
                        <div className='categoriecart'>
                            <img src={imgages[v]} />
                            <hr />
                            <p className='text-truncate text-uppercase' style={{ width: '110px' }}>{v}</p>
                        </div></Link>
                })}
            </div>
        </>
    )
}

export default Categories


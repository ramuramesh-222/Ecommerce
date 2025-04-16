import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../layout/layout';
import Electronics from '../categories/electronics';
import Jewelery from '../categories/jewelery';
import Menclothing from '../categories/menclothing';
import Womenclothing from '../categories/womenclothing';
import Productshow from '../categories/productshow';
import Categories from '../categories/categories';
import Productsall from '../categories/productsall';
import Login from '../login/login';
import Signup from '../login/signup';
import ProductsEdit from '../categories/productsEdit';

function RoutesData() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Categories />} />
                        <Route path='/home' element={<Categories />} />
                        <Route path='/:id' element={<Productshow />} />
                        <Route path='electronics' element={<Electronics />} />
                        <Route path='jewelery' element={<Jewelery />} />
                        <Route path="men's clothing" element={<Menclothing />} />
                        <Route path="women's clothing" element={<Womenclothing />} />
                        <Route path='productall' element={<Productsall />} />
                        <Route path='login' element={<Login />} />
                        <Route path='signup' element={<Signup />} />
                        <Route path='editproducts' element={<ProductsEdit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default RoutesData

import React, { cache, useEffect, useState } from 'react'
import './categories.css'
import { Link, useParams } from 'react-router-dom'

function ProductsEdit() {
    const[editproduct,setEditproduct]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setEditproduct(json))
    },[])

    const handledelete = async(deleteid)=>{
        alert(`if you sure to delete id ${deleteid}`)
        try{
            const res = await fetch(`https://fakestoreapi.com/products/${deleteid}`,{
                method:'DELETE'
            });
            const data = res.json();
            console.log(data);
            const updatedata = editproduct.filter(item=>item.id !== deleteid);
            setEditproduct(updatedata);
        } catch(err){
            console.error(err)
        }
    };

    return (
    <>
    {editproduct.length > 0 ? <div className='procts_edit'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>PRICE</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>IMAGE</th>
                    <th className='table_edit'>EDIT</th>
                </tr>
            </thead>
            <tbody>
                {editproduct.map((v,i)=>{
                  return(
                <tr key={i}>
                    <td>{v.id}</td>
                    <td>{v.title}</td>
                    <td>{v.price}</td>
                    <td>{v.description}</td>
                    <td>{v.category}</td>
                    <td>{v.image}</td>
                    <td><button className='ed_btn'>Edit</button><button className='del_btn' onClick={()=>handledelete(v.id)}>Delete</button></td>
                </tr>
                )})}
            </tbody>
        </table>
    </div>:<h1>Loading....</h1>}

    </>
  )
}

export default ProductsEdit

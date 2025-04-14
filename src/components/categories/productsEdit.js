import React, { useEffect, useState } from 'react'
import './categories.css'

function ProductsEdit() {
    const [editproduct, setEditproduct] = useState([])
    const [displayedit, setDisplayedit] = useState(false)
    const [displayedit_show, setDisplayedit_show] = useState({id:'', title: '', price: '' })


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setEditproduct(json))
    }, [])
    // DELETE
    const handledelete = async (deleteid) => {
        alert(`if you sure to delete id ${deleteid}`)
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${deleteid}`, {
                method: 'DELETE'
            });
            const data = res.json();
            console.log(data);
            const updatedata = editproduct.filter(item => item.id !== deleteid);
            setEditproduct(updatedata);
        } catch (err) {
            console.error(err)
        }
    };
    // EDIT

    const handleEdit = (id,title, price) => {
        setDisplayedit(true)
        setDisplayedit_show({ id:id ,title: title, price: price })
    }

    const editclosehandle = ()=> setDisplayedit(false);


    const edithandlefetch = ()=> {
        const strinddata = {title:displayedit_show.title,price:displayedit_show.price};
        fetch(`https://fakestoreapi.com/products/${displayedit_show.id}`,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(strinddata)
        })
        .then(response => response.json())
        .then(data => {
            const updatedProducts = editproduct.map((product)=>{
                return product.id === displayedit_show.id ? {...product,title:displayedit_show.title,price:displayedit_show.price}:product
            })
            setEditproduct(updatedProducts);
            setDisplayedit(false)

        })
        .catch((err)=>{console.error(err)})
    }

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
                        {editproduct.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.title}</td>
                                    <td>$ {v.price}</td>
                                    <td>{v.description}</td>
                                    <td>{v.category}</td>
                                    <td>{v.image}</td>
                                    <td><button className='ed_btn' onClick={() => handleEdit(v.id,v.title, v.price)}>Edit</button>
                                        <button className='del_btn' onClick={() => handledelete(v.id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div> : <h1>Loading....</h1>}
            {displayedit ?
                <div className='edit_productsdetails'>
                    <div className='edit_productsdetails_container'>
                        <div className='edit_content'>
                        {/* <label><strong>ID  :</strong>
                        <input type='text' name='title' value={displayedit_show.id} onChange={(e) => setDisplayedit_show({ ...displayedit_show, title: e.target.value })} /></label> */}
                            <label><strong>TITLE :</strong>
                            <input type='text' name='title' value={displayedit_show.title} onChange={(e) => setDisplayedit_show({ ...displayedit_show, title: e.target.value })} /></label>
                            <label><strong>PRICE :</strong>
                            <input type='number' name='price' value={displayedit_show.price} onChange={(e) => setDisplayedit_show({ ...displayedit_show, price: e.target.value })} /></label>
                            <div><button className='btn btn-primary mx-2' onClick={edithandlefetch}>SUbmit</button><button className='mx-2 btn btn-danger' onClick={editclosehandle}>Close</button></div>
                        </div>
                    </div>

                </div> : <></>}

        </>
    )
}

export default ProductsEdit

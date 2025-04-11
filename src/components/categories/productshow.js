import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Productshow() {
    const { id } = useParams();
    const [prodshowing, setProdshow] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((json) => setProdshow(json));
    }, [id]);

    if (!prodshowing) return <div className="text-center mt-5"><h1>Loading...</h1></div>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                    <img    
                        src={prodshowing.image}
                        alt={prodshowing.title}
                        className="img-fluid rounded shadow-sm"
                        style={{ maxHeight: "400px", objectFit: "contain",
                        boxShadow:" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}
                    />
                </div>
                <div className="col-md-7">
                    <h2 className="mb-3">{prodshowing.title}</h2>
                    <p className="text-muted">{prodshowing.description}</p>
                    <h4 className="text-primary">${prodshowing.price}</h4>
                    <h5 className="d-flex align-items-center gap-3 mt-3">
                        <span className="badge bg-success">⭐ {prodshowing.rating.rate}</span>
                        <small className="text-muted">{prodshowing.rating.count} reviews</small>
                    </h5>
                    <div className="mt-4">
                        <h5>Available offers</h5>
                        <ul className="list-unstyled">
                            <li>
                                <i className="bi bi-tag-fill text-success me-2"></i>
                                <strong>AXIS Bank</strong> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                <a href="#" className="ms-2 text-primary">T&C</a>
                            </li>
                            <li>
                                <i className="bi bi-tag-fill text-success me-2"></i>
                                <br></br>
                                <strong>ICICI Offer</strong> 10% off up to ₹1,000 on all icici Bank Credit Card (incl. migrated ones) EMI Txns of ₹7,490 and above
                                <a href="#" className="ms-2 text-primary">T&C</a>
                            </li>
                            <li>
                                <i className="bi bi-tag-fill text-success me-2"></i>
                                <br></br>
                                <strong>UNION Offer</strong> 10% off on BOBCARD EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above
                                <a href="#" className="ms-2 text-primary">T&C</a>
                            </li>
                            <li>
                                <i className="bi bi-tag-fill text-success me-2"></i>
                                <br/>
                                <strong>Special Price</strong> Get extra 78% off (price inclusive of cashback/coupon)
                                <a href="#" className="ms-2 text-primary">T&C</a>
                            </li>
                            <li>
                                <a href="#" className="text-primary">View 6 more offers</a>
                            </li>
                        </ul>

                        <div className="d-flex gap-3 mt-4">
                            <button className="btn btn-danger"><strong>Buy Now</strong></button>
                            <button className="btn btn-warning"><strong>Add to Cart</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productshow;

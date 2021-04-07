import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { productContext, LoggedInContext } from '../../App';
import Header from '../Header/Header';

const Checkout = () => {
    const [selectedProduct, setSelectedProduct] = useContext(productContext);
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    const { name, price, imageUrl } = selectedProduct;

    const handleCheckout = () => {
        
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        
        const newOrder = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            date: today,
            product: selectedProduct.name,
            quantity: 1,
            price: selectedProduct.price,
            imageUrl: selectedProduct.imageUrl
        } ;
        
        console.log('checkoutclicked', newOrder)
        const url = 'http://localhost:5000/addOrders';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card text-center mb-3 mt-3">
                            <img src={imageUrl} alt="Card-img" />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h5 className="card-text">price: {price}$</h5>
                                <Link to="/orders">
                                    <button className="btn btn-sm btn-outline-primary" onClick={handleCheckout}>
                                        Checkout
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
import React from 'react';
import { Link } from "react-router-dom";
import './Product.css';

const Product = (props) => {
    const {name, price, imageUrl} = props.product;
    return (
        <div className="col-md-4">
            <div className="card text-center mb-3 mt-3">
                <img src={imageUrl} alt="Card-img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-text">price: {price}$</h5>
                    <Link to="/checkout">
                        <button className="btn btn-sm btn-outline-primary" onClick={() => props.handleProduct(props.product)}>
                            Buy now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
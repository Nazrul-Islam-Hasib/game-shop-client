import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../App';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const [selectedProduct, setSelectedProduct] = useContext(productContext);
    const handleProduct = (item) =>{
        setSelectedProduct(item);
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h1>Home</h1>
                <div className="row">
                    {
                        product.map(pd => <Product key={pd._id} product={pd} handleProduct={handleProduct}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
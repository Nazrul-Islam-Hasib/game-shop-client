import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../App';
import Header from '../Header/Header';
import Product from '../Product/Product';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './Home.css';

const Home = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://mighty-cove-83835.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const [selectedProduct, setSelectedProduct] = useContext(productContext);
    const handleProduct = (item) => {
        setSelectedProduct(item);
    }
    if (product.length === 0) {
        return <Loader className="text-center center"></Loader>
    }
    else {
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        {
                            product.map(pd => <Product key={pd._id} product={pd} handleProduct={handleProduct}></Product>)
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import AddProduct from './AddProduct/AddProduct';
import DeleteProduct from './DeleteProduct/DeleteProduct';

const Admin = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://mighty-cove-83835.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row justify-content-center">
                    <AddProduct></AddProduct>
                </div>
                <div className="row mt-3">
                    <h4>All products</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map(pd => <DeleteProduct key={pd._id} product={pd}></DeleteProduct>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Admin;
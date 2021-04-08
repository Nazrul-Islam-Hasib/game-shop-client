import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import OrderItem from '../OrderItem/OrderItem';

const Order = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://mighty-cove-83835.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">price</th>
                                <th scope="col">Date</th>
                                <th scope="col">Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(pd => <OrderItem key={pd._id} order={pd}></OrderItem>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Order;
import React, { useContext } from 'react';
import { LoggedInContext } from '../../App';
import './orderItem.css'

const OrderItem = (props) => {
    const { name, price, email, quantity, date, product, imageUrl } = props.order;
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    if(loggedInUser.email === email){
        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}$</td>
                <td>{date}</td>
                <td><img src={imageUrl} alt="img" className="orderImg"/></td>
            </tr>
        );
    }
    else{
        return (
            <tr></tr>
        );
    }
    
};

export default OrderItem;
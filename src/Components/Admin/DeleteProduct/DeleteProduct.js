import React from 'react';
import './DeleteProduct.css'
const DeleteProduct = (props) => {
    const { name, price, imageUrl, _id } = props.product;
    const deleteProduct = (id) => {
        const url = `https://mighty-cove-83835.herokuapp.com/delete/${id}`
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data, 'Deleted successfully!')
        })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{price}$</td>
            <td>
                <img className="productImg" src={imageUrl} alt="img"/>
                <button className="btn btn-sm btn-danger ml-2" onClick={()=> {deleteProduct(_id)}}>Delete</button>
            </td>
        </tr>
    );
};

export default DeleteProduct;
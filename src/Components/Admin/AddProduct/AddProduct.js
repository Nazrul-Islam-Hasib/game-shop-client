import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    //Send data to server
    const onSubmit = data => {
        if(imageUrl!== null){
            const eventData = {
                name: data.game_name,
                price: data.game_price,
                imageUrl: imageUrl
            }
    
            const url = 'https://mighty-cove-83835.herokuapp.com/addProduct';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(eventData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
        
    };

    //Upload image to Imgaebb
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'c2e96acee378eb368b0c3c66a15a78a2');
        imageData.append('image', event.target.files[0]);

        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: imageData
        })
            .then(response => response.json())
            .then(data => {
                setImageUrl(data.data.display_url);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-center product-form">
            <p>Add new product</p>
            <input {...register("game_name")} type="text" placeholder="Place product name" className="form-control" />
            <br />
            <input {...register("game_price")} type="number" placeholder="Place product price" className="form-control" />
            <br />
            <input type="file" onChange={handleImageUpload} />
            <br />
            <input type="submit" className="btn btn-success mt-4" />
        </form>
    );
};

export default AddProduct;
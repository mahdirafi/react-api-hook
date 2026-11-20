import React, { useState } from 'react';

const ProductForm = ({handleNewProduct}) => {
    const [error,setError]  = useState('')

    const handleSubmit= e => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name,price,quantity);

        
        // console.log(newProduct);
        if(name.length === 0){
            setError("Please Provide a Product name");
            return;
        }else if(price.length === 0){
             setError("Please Provide Price");
             return;
           
        }
        else if(quantity.length === 0){
              setError("Please Provide quantity");
              return ;
          
        }
        else {
            setError("");
        }
        const newProduct = {
            name,
            price,
            quantity
        }

        handleNewProduct(newProduct);
    }
    return (
        <div className='text-center space-y-2'>
            <form onSubmit={handleSubmit} className='space-y-2'>
                <h2>Add a Product</h2>
                <input type="text" name="name"  placeholder='product name' className='border p-2  rounded'/> <br />
                <input type="price" name="price"  placeholder='product price' className='border p-2 rounded'/> <br />
                <input type="quantity" name="quantity" placeholder='product quantity'  className='border p-2 rounded'/> <br />
                <input type="submit" value="submit" className='border px-2 py-1 cursor-pointer rounded' />
            </form>
            <p><small className='text-red-800 text-2xl font-bold'>{error}</small></p>
        </div>
    );
};

export default ProductForm;
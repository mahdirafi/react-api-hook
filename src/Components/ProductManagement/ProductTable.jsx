import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div className='text-center'>
            <h3 className='text-white font-bold'>Products: {products.length}</h3>
            <table>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        products.map((product,index) => 
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>)
                     }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
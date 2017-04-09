import React from 'react';

const ProductList = ({ products, onDelete }) => {
    const lis = products.map(product => {
        return (
            <li key={product.id} className="list-group-item">
                { product.name }
                <button className="btn btn-danger pull-right" onClick={ ()=>onDelete(product.id) }>
                    Delete Product
                </button>
            </li>
        )
    })  
    return (
        <ul className="list-group">
            { lis }
        </ul>
    )
};

export default ProductList;

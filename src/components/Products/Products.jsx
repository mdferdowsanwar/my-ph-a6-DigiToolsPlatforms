import React, { use } from 'react';
import Product from './Product';

const Products = ({ dataPromise, carts, setCarts }) => {
    const productData = use(dataPromise);
    //console.log(productData);
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-10/12 m-auto my-10'>
                {
                    productData.map(product => {
                        return (
                            <Product key={product.id} product={product} carts={carts} setCarts={setCarts} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;
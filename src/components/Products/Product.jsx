import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { toast } from 'react-toastify';

const Product = ({ product, carts, setCarts }) => {
    const [isBrought, setIsBrought] = useState(false);
    const handleBuying = () => {
        setIsBrought(true);

        const isFound = carts.find((item) => item.id === product.id);
        if(isFound){
            toast.error("Item has already been added to cart!");
            return;
        }
        setCarts([...carts, product]);
        toast("Item has added to the cart.");
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-lg p-5">
                <div className='flex justify-end'>
                    <span className={`badge ${product.tag === 'popular' ? 'badge-success' : product.tag === 'new' ? 'badge-info' : 'badge-secondary'} rounded-full text-white`}>{product.tag}</span>
                </div>
                <figure className='border rounded-full h-16 w-16 mb-3'>
                    <img src={product.icon} alt="" className='h-8 w-8' />
                </figure>
                <div className='space-y-3'>
                    <h2 className="text-2xl font-semibold">{product.name}</h2>
                    <p className='text-zinc-600'>{product.description}</p>
                    <p><span className='text-xl font-semibold'>${product.price}</span> / {product.period}</p>

                    {
                        product.features.map(feature => <div className='flex items-center gap-2'><TiTick className='text-success' /> <p className='text-zinc-600'>{feature}</p></div>)
                    }

                    <button onClick={handleBuying} className="w-full bg-[#9c88ff] rounded-full text-white font-semibold h-10 cursor-pointer">
                        {isBrought ? 
                        <div className='flex items-center justify-center gap-1 text-black bg-green-300 w-full h-10 rounded-full'>
                            <TiTick />
                            <span>Item has added to cart</span>
                        </div> : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
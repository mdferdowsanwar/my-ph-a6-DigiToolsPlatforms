import React from 'react';
import { toast } from 'react-toastify';
import cartImage from '../../assets/cart.png'

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handleDeleteItem = (deleteItem) => {
        const filterCarts = carts.filter(fc => fc.id != deleteItem.id);
        setCarts(filterCarts);
        toast.success("Item deleted successfully.");
    }

    const handlePayment = () => {
        if(carts.length > 0){
            setCarts([]);
        toast.success("Payment has been successful.");
        } else {
            toast.error("Please added item to the cart first.");
        }        

    }

    return (
        <div className='w-10/12 m-auto'>
            <h1 className='text-2xl font-bold'>Your Cart:</h1>
            {
                carts.length === 0
                    ? 
                    <div className='flex items-center flex-col justify-center gap-3 text-zinc-600 my-5'>
                        <img className='w-16 h-auto opacity-50' src={cartImage} alt="" />
                        <p className='text-center text-lg'>Your Cart is empty.</p>
                    </div>
                    : <>
                        {
                            carts.map(item => {
                                return (
                                    <div key={item.id} className='p-3 my-6 rounded-xl flex justify-between items-center gap-5 bg-base-200 shadow-lg'>
                                        <div className='flex gap-5 items-center justify-center'>
                                            <figure className='border rounded-full h-16 w-16 flex justify-center items-center bg-white'>
                                                <img src={item.icon} alt="" className='h-8 w-8' />
                                            </figure>
                                            <div>
                                                <p className='text-xl font-bold'>{item.name}</p>
                                                <p className='text-zinc-600'>${item.price}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-3 items-center justify-center'>
                                            <button onClick={() => handleDeleteItem(item)} className='btn btn-ghost text-error rounded-full'>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div className='flex justify-between items-center font-semibold mt-5 px-3'>
                            <span>Total</span>
                            <span className='text-2xl'>${totalPrice}</span>
                        </div>
                    </>
            }

            <button onClick={handlePayment} className='text-lg font-semibold bg-[#9c88ff] btn w-full my-5 py-7 text-white rounded-full'>Proceed to Check Out</button>
        </div>
    );
};

export default Cart;
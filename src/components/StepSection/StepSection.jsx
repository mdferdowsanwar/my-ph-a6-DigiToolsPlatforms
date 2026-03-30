import React from 'react';
import userImage from '../../assets/user.png'
import productImage from '../../assets/package.png'
import rocketImage from '../../assets/rocket.png'

const StepSection = () => {
    return (
        <div className='bg-[#F9FAFC] py-12'>
            <div className='w-10/12 m-auto'>
                <div className='text-center space-y-3'>
                    <h1 className='text-3xl font-bold'>Get Started in 3 Steps</h1>
                    <p className='text-zinc-600'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-5 my-8'>
                    <div className="card bg-base-100 card-lg shadow-sm">
                        <div className='flex items-end justify-end m-3'>
                            <span className="bg-[#9c88ff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">01</span>
                        </div>
                        <div className="card-body text-center items-center">
                            <div className='bg-[#DCD7FD] rounded-full p-3'>
                                <img src={userImage} alt="" />
                            </div>
                            <h2 className="card-title">Create Account</h2>
                            <p className='text-zinc-600'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-lg shadow-sm">
                        <div className='flex items-end justify-end m-3'>
                            <span className="bg-[#9c88ff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">02</span>
                        </div>
                        <div className="card-body text-center items-center">
                            <div className='bg-[#DCD7FD] rounded-full p-3'>
                                <img src={productImage} alt="" />
                            </div>
                            <h2 className="card-title">Choose Products</h2>
                            <p className='text-zinc-600'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-lg shadow-sm">
                        <div className='flex items-end justify-end m-3'>
                            <span className="bg-[#9c88ff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">03</span>
                        </div>
                        <div className="card-body text-center items-center">
                            <div className='bg-[#DCD7FD] rounded-full p-3'>
                                <img src={rocketImage} alt="" />
                            </div>
                            
                            <h2 className="card-title">Start Creating</h2>
                            <p className='text-zinc-600'>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default StepSection;
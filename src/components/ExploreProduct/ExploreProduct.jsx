import React from 'react';

const ExploreProduct = () => {
    return (
        <div className='bg-[#8E18FA] py-16'>
            <div className='w-10/12 m-auto text-center py-5 text-white space-y-4'>
                <h3 className='text-3xl font-bold'>Ready to Transform Your Workflow?</h3>
                <p>Join thousands of professionals who are already using Digitools to work smarter. 
                Start your free trial today.</p>
                <div className='flex gap-3 items-center justify-center'>
                    <button className='btn bg-[#FFFFFF] rounded-full text-[#8E18FA] hover:btn-primary'>Explore Products</button>
                    <button className='btn btn-outline rounded-full'>View Pricing</button>
                </div>
                <ul className='flex gap-6 justify-center items-center'>
                    <li>14-day free trial</li>
                    <li className='list-disc'>No credit card required</li>
                    <li className='list-disc'>Cancel anytime</li>
                </ul>
            </div>
        </div>
    );
};

export default ExploreProduct;
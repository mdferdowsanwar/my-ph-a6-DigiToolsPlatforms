import React from 'react';

const Statistic = () => {
    return (
        <div className='bg-[#9c88ff] text-white py-10'>
            <div className='w-10/12 m-auto grid grid-col sm:grid-cols-3 text-center gap-5'>
                <div className='sm:border-r'>
                    <h1 className='text-4xl font-semibold mb-2'>50K+</h1>
                    <p>Active Users</p>
                </div>
                <div className='sm:border-r'>
                    <h1 className='text-4xl font-semibold mb-2'>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mb-2'>4.9</h1>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;
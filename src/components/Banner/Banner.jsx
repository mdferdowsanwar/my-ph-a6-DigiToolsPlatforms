import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaRegCircleDot } from 'react-icons/fa6';
import bannerImage from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className='w-10/12 m-auto my-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-5'>
            <div className='space-y-5'>
                <div className="badge bg-[#9c88ff] rounded-full text-white">
                    <FaRegCircleDot />
                    New: AI-Powered Tools Available
                </div>
                <h1 className='text-5xl font-bold'>Supercharge Your Digital Workflow</h1>
                <p className='text-zinc-600'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.Explore Products
                </p>
                <div className='flex items-center gap-5'>
                    <button className='btn bg-[#9c88ff] rounded-full text-white hover:btn-primary'>Explore Product</button>
                    <button className='btn btn-outline btn-primary rounded-full flex items-center gap-2'>
                     <CiPlay1 />   Watch Demo
                    </button>
                </div>
            </div>
            <div>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;
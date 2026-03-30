import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='bg-[#101727] pt-20 pb-10 text-zinc-500'>
            <div className='w-10/12 m-auto space-y-5'>
                <div className='flex flex-col md:flex-row justify-between gap-16'>
                    <div className='flex-1 space-y-3'>
                        <h2 className='text-3xl font-bold text-white'>DigiTools</h2>
                        <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className='flex justify-between items-center flex-2 gap-5'>
                        <ul className='space-y-2'>
                            <h4 className='text-xl font-semibold text-white'>Product</h4>
                            <li className='hover:text-purple-500'><a href=""><a href="">Features</a></a></li>
                            <li className='hover:text-purple-500'><a href="">Pricing</a></li>
                            <li className='hover:text-purple-500'><a href="">Templates</a></li>
                            <li className='hover:text-purple-500'><a href="">Integrations</a></li>
                        </ul>
                        <ul className='space-y-2'>
                            <h4 className='text-xl font-semibold text-white'>Company</h4>
                            <li className='hover:text-purple-500'><a href="">About</a></li>
                            <li className='hover:text-purple-500'><a href="">Blog</a></li>
                            <li className='hover:text-purple-500'><a href="">Careers</a></li>
                            <li className='hover:text-purple-500'><a href="">Press</a></li>
                        </ul>
                        <ul className='space-y-2'>
                            <h4 className='text-xl font-semibold text-white'>Resources</h4>
                            <li className='hover:text-purple-500'><a href="">Documentation</a></li>
                            <li className='hover:text-purple-500'><a href="">Help Center</a></li>
                            <li className='hover:text-purple-500'><a href="">Community</a></li>
                            <li className='hover:text-purple-500'><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='space-y-3 flex-1'>
                        <p className='text-xl text-white'>Social Links</p>
                        <ul className='flex text-black items-center gap-5'>
                            <li className='bg-white rounded-full w-7 h-7 flex justify-center items-center hover:text-purple-500 hover:bg-transparent'><a href=""><FaLinkedin /></a></li>
                            <li className='bg-white rounded-full w-7 h-7 flex justify-center items-center hover:text-purple-500 hover:bg-transparent'><a href=""><FaFacebookSquare /></a></li>
                            <li className='bg-white rounded-full w-7 h-7 flex justify-center items-center hover:text-purple-500 hover:bg-transparent'><a href=""><TiSocialTwitter /></a></li>
                        </ul>
                    </div>
                </div>

                <hr className='mt-12' />
                
                <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-5'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <ul className='flex gap-4 justify-center items-center'>
                        <li className='hover:text-purple-500'><a href="">Privacy Policy</a></li>
                        <li className='hover:text-purple-500'><a href="">Terms of Service</a></li>
                        <li className='hover:text-purple-500'><a href="">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
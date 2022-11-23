import React from 'react'

import Logo from '../../src/logo.svg';


const profileImg = 'https://avatars.githubusercontent.com/u/112094927?v=4';
const Header = () => {
    return (
        <>
            <header className='py-5 px-8'>
                <div className="container-fluid">
                    <div className="navbar flex items-center justify-between">
                        <div className="menu-mobile cursor-pointer block lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="brand-logo flex items-center">

                            <img src={Logo} alt="" className='w-auto h-5' />
                            <div className="page-menu ml-10 hidden lg:block">
                                <ul className='flex'>
                                    <li className='mx-4'><a className='font-medium text-gray-500' href="http://" target="_blank" rel="noopener noreferrer">Inspiration</a></li>
                                    <li className='mx-4'><a className='font-medium text-gray-500' href="http://" target="_blank" rel="noopener noreferrer">Find Work</a></li>
                                    <li className='mx-4'><a className='font-medium text-gray-500' href="http://" target="_blank" rel="noopener noreferrer">Learn Design</a></li>
                                    <li className='mx-4'><a className='font-medium text-gray-500' href="http://" target="_blank" rel="noopener noreferrer">Go Pro</a></li>
                                    <li className='mx-4'><a className='font-medium text-gray-500' href="http://" target="_blank" rel="noopener noreferrer">Design Files</a></li>
                                    <li className='mx-4'><a className='font-medium text-gray-500' href="http://" target="_blank" rel="noopener noreferrer">Hire Designers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="action-menu flex items-center">
                            <div className="search-box hidden lg:block  py-2 w-[9rem] pl-10 bg-[#f3f3f4]  rounded-lg overflow-x-hidden relative">
                                <input type="text" placeholder='Search' className='text-gray-500 bg-transparent  outline-none' name="" id="" />
                                <div className="s-icon absolute top-[10px] left-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#9e9ea7" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="job  ml-4">
                                <div className="j-icon cursor-pointer relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9e9ea7" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                                    </svg>

                                    <div className="c-icn   bottom-[-5px] left-2 absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="w-4 h-4 bg-gray-500 rounded-full border-2 border-white">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                            <div className="profile hidden lg:block cursor-pointer mx-4 w-8 h-8 ">
                                <img src={profileImg} alt="" />
                            </div>
                            <div className="upload hidden lg:block">
                                <a className='py-3 bg-[#ea4c89] hover:bg-[#ea4c8990] px-4 text-white rounded-lg font-medium' href="">Upload</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
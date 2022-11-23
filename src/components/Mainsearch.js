import React from 'react';
import {searchTag} from '../Constants';

const Mainsearch = () => {
    return (
        <>
            <div className="main-search py-5 bg-[#f3f3f4] relative">
                <div className="container-fluid px-16">
                    <div className="search-item mb-[-10] py-4 bg-white px-12 w-full lg:w-[35%] relative bottom-[-3rem] mx-auto shadow-lg shadow-gray-100 rounded-lg">
                        <input type="text" placeholder='Search...' className='text-black w-full outline-none' name="" id="" />
                        <div className="se-icon absolute top-4 left-3 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9e9ea7" className="w-6 h-6">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="shots cursor-pointer border-l-2 pl-3 flex items-center absolute right-3 top-4">
                            <p className='font-medium mr-5'>Shots</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.9} stroke="#000" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <div className="tags-sec mt-8">
                <div className="container-fluid">
                    <div className="tag-contents text-center py-6">
                        <h2 className='text-black font-bold text-3xl'>Portfolio website</h2>
                        <p className='py-3'>10,000+ unique portfolio website designs</p>
                        <div className="tags-list">
                            <ul className='flex justify-start lg:justify-center'>
                                <li className='font-medium'>
                                    Related:
                                </li>
                                {searchTag.map((data) => (
                                    <li className='mx-1 lg:px-3'><a href="" className='text-[#ea4c89]'>{data.name}</a></li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fileter-action px-16 flex items-center justify-between mt-5">
                <div className="popular-select">
                    <select name="" id="" className='px-2 outline-none border py-2 rounded-lg border-gray-200 w-[8rem]'>
                        <option value="">Popular</option>
                    </select>
                </div>
                <div className="filter-item hidden lg:block">
                    <ul className=' inline-block lg:flex items-center'>
                        <li><a href="" className='font-medium py-2 px-4 bg-gray-100 rounded-lg'>Discover</a></li>
                        {
                            searchTag.map((filterData) => (
                                <li className='mx-4'><a href="" >{filterData.filter}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="filter-option flex border rounded-lg border-gray-200 py-2 px-4 cursor-pointer">
                    <div className="fl-icon mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>
                    </div>
                    <p>Filter</p>

                </div>
            </div>
        </>
    )
}

export default Mainsearch
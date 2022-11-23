import React from 'react'

import { productObject } from '../Constants'


const Productlist = () => {
    return (
        <>
            <div className="container-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-16 my-6">
                {
                    productObject.map((data) => (
                        <div className="product-item cursor-pointer">
                            <div className="pr-img relative text-center rounded-lg overflow-hidden">
                                <img src={data.prImg} className='w-auto  rounded-md' alt="" />
                                <div className="product-info flex items-center justify-between px-2 absolute bottom-0 left-0 w-full pb-4 pt-10 bg-gradient-to-t from-[#00000042] to-[#00000000]">
                                    <div className="pr-name">
                                        <h2 className='font-bold text-lg text-white'>{data.prName}</h2>
                                    </div>
                                    <div className="shots-active flex items-center">
                                        <div className="folder-ad p-2 rounded-lg cursor-pointer bg-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9e9ea7" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V10.5z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                        <div className="shot-like cursor-pointer p-2 rounded-lg  bg-white ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9e9ea7" className="w-6 h-6">
                                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-info flex items-center justify-between my-3">
                                <div className="studio-info flex items-center">
                                    <div className="user-post rounded-full w-7 h-7  overflow-hidden mr-2">
                                        <img src={data.userUploadIcon} alt="" />
                                    </div>
                                    <div className="studio-name"><h2 className='font-medium text-black'>{data.studioName}</h2></div>
                                    <div className="batch ml-2">
                                        <p className='px-1 py-[3px]  text-xs bg-gray-300 rounded-md  font-medium text-white'>{data.batchOption}</p>
                                    </div>
                                </div>
                                <div className="shot-target flex items-center">
                                    <div className="like flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className="w-4 h-4 fill-[#9e9ea7] hover:fill-[#ea4c89]">
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                        <p className='text-sm font-medium text-gray-600 ml-1'>{data.likeTarget}</p>
                                    </div>
                                    <div className="watch-shot flex items-center ml-3">
                                        <div className="w-icon ">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-[#9e9ea7] hover:fill-[#ea4c89]">
                                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                            </svg>

                                        </div>
                                        <p className='text-sm font-medium text-gray-600 ml-1'>{data.watchTime}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Productlist
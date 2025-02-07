import { useState } from 'react'
import logo from "../../assets/logo.png"
import olivia from "../../assets/olivia.png"
import Dropdown from './dropdown'

const NavBar = () => {

    const [isClose, setClose] = useState(false)
    const [isRes, setRes] = useState(false)
    const [isProduct, setProduct] = useState(false)


    return (
        <div>
            <div className='flex justify-between md: px-3 items-center py-4 border border-gray-300 md:px-8 md:py-6'>
                <div className='flex items-center gap-10 px-8'>
                    <img src={logo} alt="logo" />
                    <div className='hidden md:flex gap-10'>
                        <p className='font-semibold text-[#475467]'>Home</p>
                        <div className='relative'>
                            <div className={`absolute top-14 ${isProduct ? "flex" : "hidden"}`}>
                                <Dropdown />
                            </div>
                            <div className='flex relative items-center cursor-pointer gap-2' onClick={() => setProduct(!isProduct)}>
                                <p className='font-semibold text-[#475467]'>Products</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#475467]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                        </div>
                        <div className='relative'>
                            <div className={`absolute top-14 ${isRes ? "flex" : "hidden"}`}>
                                <Dropdown />
                            </div>
                            <div className='flex relative items-center gap-2 cursor-pointer' onClick={() => setRes(!isRes)}>
                                <p className='font-semibold text-[#475467]'>Resources</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[#475467]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>

                        </div>
                        <p className='font-semibold text-[#475467]'>Pricing</p>
                    </div>
                </div>

                <div className='hidden md:flex'>
                    <img src={olivia} alt="" />
                </div>
                <div className="md:hidden" onClick={() => setClose(!isClose)}>
                    {
                        isClose ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                    }
                </div>

            </div>
        </div>
    )
}

export default NavBar
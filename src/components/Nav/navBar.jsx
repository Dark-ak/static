import { useState } from 'react'
import logo from "../../assets/logo.png"

const NavBar = () => {

    const [isClose, setClose] = useState(false)


    return (
        <div>
            <div className='flex justify-between px-3 items-center py-4 border border-gray-300'>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div onClick={() => setClose(!isClose)}>
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
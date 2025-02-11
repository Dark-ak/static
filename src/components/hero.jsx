import heroM from "../assets/hero.png"
import bolt from "../assets/bolt.png"
import feather from '../assets/feather.png'
import global from '../assets/global.png'
import light  from '../assets/light.png'
import n  from '../assets/N.png'
import spehere from "../assets/Sphere.png"
import heroW from "../assets/heroW.png"


const Hero = () => {
    return (
        <div className="">
            <div className='flex flex-col justify-center items-center pt-14 pb-6 border-b border-gray-300 px-4 gap-4 md:mt-16 '>
                <div className=' flex items-center bg-[#F9F5FF] rounded-full border-2 p-1 md:border-[#E63F3A4D]'>
                    <div className='bg-white border-2 border-[#E9D7FE] md:border-[#E63F3A80] rounded-full '>
                        <p className='text-[#E63F3A] font-medium text-xs md:text-sm px-2'>New Feature</p>
                    </div>

                    <div className='flex items-center'>
                        <p className='text-[#E63F3A] font-medium text-xs md:text-sm px-2'>Check out team dashboard</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-[#966ec4] md:text-[#E63F3A]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>

                    </div>
                </div>

                <div className='flex flex-col items-center gap-6 md:w-[60%] '>
                    <p className='text-4xl font-semibold text-center md:text-5xl'>Beautiful analytics to grow smarter</p>
                    <p className='text-center text-gray-500 text-xl font-normal md:py-5 md:w-[80%]'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>

                <div className='flex flex-col md:flex-row-reverse md:justify-center w-full gap-3'>
                    <button className='bg-[#E63F3A] shadow hover:bg-[#966ec4] text-white text-base font-semibold rounded-full py-3 px-5'>Sign up</button>
                    <button className='flex items-center justify-center shadow rounded-full border-gray-300 border py-3 px-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                        <p className='text-base font-medium'>Demo</p>
                    </button>
                </div>
                <div className='flex items-center flex-col '>
                    <div className='py-16'>
                        <img src={heroM} alt="" className="md:hidden"/>
                        <img src={heroW} alt="" className="hidden md:flex"/>
                    </div>

                    <div>
                        <p className='text-center font-medium text-[#475467]'>Join 4000+ companies already growing</p>
                    </div>

                    <div className='grid grid-cols-2 gap-4 py-9 md:grid-cols-6'>
                        <img src={bolt} alt="" className='h-9 md:h-12'/>
                        <img src={light} alt="" className='h-9 md:h-12'/>
                        <img src={feather} alt="" className='h-9 md:h-12'/>
                        <img src={spehere} alt="" className='h-9 md:h-12'/>
                        <img src={global} alt="" className='h-9 md:h-12'/>
                        <img src={n} alt="" className='h-9 md:h-12'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
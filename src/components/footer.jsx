
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div className='md:px-16'>
            <div className='grid grid-cols-2 justify-center md:grid-cols-3 lg:grid-cols-6 p-8 gap-8 md:py-16'>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-[#667084] font-semibold'>Product</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[#475466] font-semibold'>Overview</p>
                        <p className='text-[#475466] font-semibold'>Features</p>
                        <p className='text-[#475466] font-semibold'>Solutions <span className="text-xs text-green-500 font-semibold">New</span></p>
                        <p className='text-[#475466] font-semibold'>Tutorials</p>
                        <p className='text-[#475466] font-semibold'>Pricing</p>
                        <p className='text-[#475466] font-semibold'>Releases</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-[#667084] font-semibold'>Company</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[#475466] font-semibold'>About us</p>
                        <p className='text-[#475466] font-semibold'>Careers</p>
                        <p className='text-[#475466] font-semibold'>Press</p>
                        <p className='text-[#475466] font-semibold'>News</p>
                        <p className='text-[#475466] font-semibold'>Media kit</p>
                        <p className='text-[#475466] font-semibold'>Contact</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-[#667084] font-semibold'>Resources</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[#475466] font-semibold'>Blog</p>
                        <p className='text-[#475466] font-semibold'>Newsletter</p>
                        <p className='text-[#475466] font-semibold'>Events</p>
                        <p className='text-[#475466] font-semibold'>Help centre</p>
                        <p className='text-[#475466] font-semibold'>Tutorials</p>
                        <p className='text-[#475466] font-semibold'>Support</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-[#667084] font-semibold'>Use cases</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[#475466] font-semibold'>Startups</p>
                        <p className='text-[#475466] font-semibold'>Enterprise</p>
                        <p className='text-[#475466] font-semibold'>Government</p>
                        <p className='text-[#475466] font-semibold'>SaaS centre</p>
                        <p className='text-[#475466] font-semibold'>Marketplaces</p>
                        <p className='text-[#475466] font-semibold'>Ecommerce</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-[#667084] font-semibold'>Social</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[#475466] font-semibold'>Twitter</p>
                        <p className='text-[#475466] font-semibold'>LinkedIn</p>
                        <p className='text-[#475466] font-semibold'>Facebook</p>
                        <p className='text-[#475466] font-semibold'>GitHub</p>
                        <p className='text-[#475466] font-semibold'>AngelList</p>
                        <p className='text-[#475466] font-semibold'>Dribbble</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <p className='text-sm text-[#667084] font-semibold'>Legal</p>
                    <div className='flex flex-col gap-3'>
                        <p className='text-[#475466] font-semibold'>Terms</p>
                        <p className='text-[#475466] font-semibold'>Privacy</p>
                        <p className='text-[#475466] font-semibold'>Cookies</p>
                        <p className='text-[#475466] font-semibold'>Licenses</p>
                        <p className='text-[#475466] font-semibold'>Settings</p>
                        <p className='text-[#475466] font-semibold'>Contact</p>
                    </div>
                </div>

            </div>
            <div className='py-16 px-7 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4'>
                <img src={logo} alt="" className='w-fit'/>
                <p className='text-[#667084]'>© 2077 zysktechnologies. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
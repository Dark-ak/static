
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import olivia from "../assets/olivia.png"
import phoenix from "../assets/phoenix.png"
import lana from "../assets/lana.png"


const Posts = () => {
    return (
        <div className="md:mx-20">
            <div className='py-16 px-5 flex flex-col md:py-24'>
                <div className='flex justify-between items-center'>
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#E63F3A] font-semibold text-sm'>Our blog</p>
                            <p className='text-3xl font-semibold md:text-4xl'>Latest blog posts </p>
                        </div>
                        <p className='text-[#475467] text-lg md:text-xl'>Tool and strategies modern teams need to help their companies grow.</p>
                    </div>
                    <button className='bg-[#E63F3A] text-white font-medium rounded-lg py-3 px-5 hidden md:flex'>View all posts</button>

                </div>

                <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
                    <div className='flex flex-col gap-4'>
                        <img src={p1} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#E63F3A] font-semibold text-sm'>Design</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-2xl font-semibold'>UX review presentations</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <p className='text-[#475467]'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        </div>

                        <div className='flex gap-2 py-2'>
                            <img src={olivia} alt="" className='h-fit' />
                            <div className='flex flex-col w-full '>
                                <p className='text-sm font-semibold'>Olivia Rhye</p>
                                <p className='text-sm text-[#475467]'>20 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <img src={p2} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#E63F3A] font-semibold text-sm'>Product</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-2xl font-semibold'>Migrating to Linear 101</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <p className='text-[#475467]'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
                        </div>

                        <div className='flex gap-2 py-2'>
                            <img src={phoenix} alt="" className='h-fit' />
                            <div className='flex flex-col w-full '>
                                <p className='text-sm font-semibold'>Phoenix Baker</p>
                                <p className='text-sm text-[#475467]'>19 Jan 2024</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <img src={p3} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#E63F3A] font-semibold text-sm'>Software Engineering</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-2xl font-semibold'>Building your API stack</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>
                            <p className='text-[#475467]'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
                        </div>

                        <div className='flex gap-2 py-2'>
                            <img src={lana} alt="" className='h-fit' />
                            <div className='flex flex-col w-full '>
                                <p className='text-sm font-semibold'>Lana Steiner</p>
                                <p className='text-sm text-[#475467]'>18 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='bg-[#E63F3A] text-white font-medium rounded-lg py-3 px-5 md:hidden'>View all posts</button>
            </div>
        </div>
    )
}

export default Posts
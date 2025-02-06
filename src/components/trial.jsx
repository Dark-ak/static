

const Trial = () => {
    return (
        <div>
            <div className='bg-[#F9FAFB] flex flex-col items-center py-16 gap-10 px-5'>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-3xl font-semibold'>Start Your Free Trial</p>
                    <p className='text-lg text-[#475467] text-center'>Join over 4000+ startups already growing with Untitled</p>
                </div> 
                <div className='flex flex-col w-full gap-4'>
                    <button className='bg-[#E63F3A] text-white font-semibold py-3 px-5 rounded-lg'>Get Started</button>
                    <button className='bg-white py-3 px-5 font-semibold border border-gray-400 rounded-lg'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Trial